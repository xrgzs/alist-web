import { createResource } from "solid-js"
import { Markdown, MaybeLoading } from "~/components"
import { useT, useManageTitle } from "~/hooks"

const fetchReadme = async () =>
  await (
    await fetch("https://cdn.jsdelivr.net/gh/xrgzs/dlist@main/README.md")
  ).text()

const About = () => {
  const t = useT()
  useManageTitle("manage.sidemenu.about")
  const [readme] = createResource(fetchReadme)
  return (
    <MaybeLoading loading={readme.loading}>
      <Markdown children={readme()} />
    </MaybeLoading>
  )
}

export default About
