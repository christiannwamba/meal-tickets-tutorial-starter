import React, { useEffect, useState } from 'react';
import { gql, withAuth } from '@8base/react-sdk';
import { withApollo } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { compose } from 'recompose'; 

import { AUTH_PROFILE_ID } from '../authClient';

const CURRENT_USER_QUERY = gql`
  query CurrentUser {
    user {
      id
      email
    }
  }
`;

const USER_SIGN_UP_MUTATION = gql`
  mutation UserSignUp($user: UserCreateInput!, $authProfileId: ID) {
    userSignUpWithToken(user: $user, authProfileId: $authProfileId) {
      id
      email
    }
  }
`;

let Auth = ({ auth, client }) => {
  const [authorizing, setAuthorizing] = useState(true);

  useEffect(() => {
    if (document.location.hash.includes('access_token')) {
      const authorize = async () => {
        const { idToken, email } = await auth.authClient.getAuthorizedData();

        const context = { headers: { authorization: `Bearer ${idToken}` } };

        // Check if user exists, if not it'll return an error
        await client.query({
          query: CURRENT_USER_QUERY,
          context,
        })
        // If user is not found - sign them up
          .catch(() => client.mutate({
            mutation: USER_SIGN_UP_MUTATION,
            variables: {
              user: { email },
              authProfileId: AUTH_PROFILE_ID,
            },
            context,
          }));

        // After successful signup store token in local storage
        // After that token will be added to a request headers automatically

        // TODO replace replace placeholder value with your workspace id
        auth.authClient.setState({
          token: idToken,
          workspaceId: 'YOUR_WORKSPACE_ID',
        });

        setAuthorizing(false);
      };

      authorize();
    } else {
      auth.authClient.authorize();

      setAuthorizing(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return authorizing ? null : <Redirect to="/" />;
};

export default compose(withApollo, withAuth)(Auth);
