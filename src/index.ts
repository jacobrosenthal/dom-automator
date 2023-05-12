type Action = {
  type: string
}
type Agent = {
  actions: AsyncIterator<Action>
}

export const analyze = (
  domString: string,
  options?: Record<string, any>
): string => {
  return null
}

export const createAgent = async (
  prompt: string,
  getDOM: () => Promise<string>,
  options?: Record<string, any>
): Agent => {
  const startDOM = await getDOM()
  return null
}

export const createActionScript = (
  action: Action,
  options?: Record<string, any>
): string => {
  return null
}
