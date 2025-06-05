import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs'
import path from 'path'

export default async function SamplePage() {
  const filePath = path.join(process.cwd(), 'app/sample/content.mdx')
  const source = fs.readFileSync(filePath, 'utf8')

  return (
    <div className="container mx-auto px-4 py-8">
      <MDXRemote source={source} />
    </div>
  )
} 