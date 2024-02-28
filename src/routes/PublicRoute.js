import { Redirect, Route } from "react-router-dom";

// This is a placeholder. Replace this with your own authentication check logic.
const isAuthenticated = () => {
  // Check if the user is authenticated
  // For example, check if there's a token in the local storage
  return localStorage.getItem("token") !== null;
};

export function PublicRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}

export function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
