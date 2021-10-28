export function modifyApp(app: "dogsapp" | "weatherapp" | "moviesapp" | "mobiledogsapp" | "portfolioapp" ) {
    return {
        type: 'MODIFY_APP',
        app
    }
}