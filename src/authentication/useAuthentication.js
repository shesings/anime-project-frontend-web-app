import React from "react";
/**
 * Hook that will use some mechanism (localstorage or calling backend endpoint) to give information on whether the user is 
 * authenticated or not, premium user or not. 
 * @returns Object related to authentication state
 */
export function useAuthentication() {
    // do some state or redux store look up later TODO
    return {
        isLoggedIn: false,
        isPremiumUser: false
    };
}