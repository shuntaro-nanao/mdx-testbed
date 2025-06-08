import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'

export default async function SamplePage({
  searchParams,
}: {
  searchParams: { file?: string }
}) {
  const fileName = searchParams.file || 'context01.mdx'
  const filePath = path.join(process.cwd(), 'src/app/sample', fileName)

  try {
    const source = fs.readFileSync(filePath, 'utf8')
    return (
      <div className="container mx-auto px-4 py-8">
        <MDXRemote source={source} />
      </div>
    )
  } catch (error) {
    notFound()
  }
} 