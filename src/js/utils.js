export const UserType = {
    CREATOR: 'creator',
    VIEWER: 'viewer',
}

// Extract the viewer or creator from the iframe params
export const identify = type => new URLSearchParams(window.location.search).get(type);