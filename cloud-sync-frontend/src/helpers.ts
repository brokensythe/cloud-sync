export async function getRequest(url: string, setter: React.Dispatch<React.SetStateAction<any>>) {
  const info = await (await fetch(url)).json()
  setter(info.data)
}
