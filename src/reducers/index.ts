export type PossibleStates = {
  app: "dogsapp" | "weatherapp" | "moviesapp" | "mobiledogsapp" | "portfolioapp" 
}

const initialState = {
  app: 'dogsapp'
} as PossibleStates

export default function reducer(state = initialState, action: { type: string, app: "dogsapp" | "weatherapp" | "moviesapp" | "mobiledogsapp" | "portfolioapp" }) {
  switch (action.type) {
    case 'MODIFY_APP':
      return {
        ...state,
        app: action.app
      }
    default:
      return { ...state }
  }
}