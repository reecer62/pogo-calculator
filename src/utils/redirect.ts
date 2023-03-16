export const redirectTo = (route: string) => {
    if (typeof window === "undefined") {
        console.error(`ERROR: window is undefined, unable to redirect to route=[${route}]`)
    }
    window.location.href = route;
}