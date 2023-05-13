type Action = {
  type: string
}
type Agent = {
  actions: AsyncIterator<Action>
}
type Step = {
  action: string
  // observation:string
}

const completion = async (
  dom: string,
  task: string,
  previousSteps: Step[]
): Promise<string> => {
  await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: `you an an agent. Your task is to ${task}\nthis is the dom:\n${dom}\n${previousSteps.toString()}`
      }
    ]
  })
  return 'something from result'
}

const parse = (result: string): Action => {
  return JSON.parse(result) as Action
}

export const createAgent = (
  task: string,
  getDOM: () => Promise<string>,
  options?: Record<string, any>
): Agent => {
  async function* actionGenerator(): AsyncIterableIterator<Action> {
    const steps: Step[] = []
    while (true) {
      const result = await completion(task, await getDOM(), steps)
      const action = parse(result)
      steps.push({ action: result })
      // typically you would run the tool here, and if what it gave you doesnt parse or isnt a correct tool use you would add the error to the tool use log and rerun the completion again so it can self correct
      // We could sink running the tool inside the generator here, but at that point, why poll a generator to completion?
      yield action
    }
  }

  async function* actions(): AsyncIterableIterator<Action> {
    yield* actionGenerator()
  }

  return { actions: actions() }
}

export const createActionScript = (
  action: Action,
  options?: Record<string, any>
): string => {
  return null
}
