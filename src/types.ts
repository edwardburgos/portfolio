export type appsType = {
    [key: string]: {
        name: string,
        description: string,
        features: string[],
        deploymentLink?: string,
        webDemonstration?: string,
        mobileDemonstration?: string,
        demonstration?: string,
        sourceCode?: string,
        backendSourceCode?: string,
        frontendSourceCode?: string,
        expoDeployment?: string,
        downloadApk?: string,
        backendstack?: {name: string, logo: string}[],
        frontendstack?: {name: string, logo: string}[],
        stack?: {name: string, logo: string}[]
    }
}