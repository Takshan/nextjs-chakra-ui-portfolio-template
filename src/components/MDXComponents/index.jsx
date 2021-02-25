import Image from "next/image"

import CodeBlock from "./codeBlock"
import CustomLink from "./customLink"
import Headings from "./headings"

const MDXComponents = {
  h1: (props) => <Headings as="h1" size="2xl" {...props} />,
  h2: (props) => <Headings as="h2" size="xl" {...props} />,
  h3: (props) => <Headings as="h3" size="lg" {...props} />,
  h4: (props) => <Headings as="h4" size="md" {...props} />,
  h5: (props) => <Headings as="h5" size="sm" {...props} />,
  h6: (props) => <Headings as="h6" size="xs" {...props} />,

  a: CustomLink,
  code: CodeBlock,

  Image,
}

export default MDXComponents
