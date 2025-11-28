import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

export async function POST(request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file')
    const folder = formData.get('folder') || 'products'

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Create unique filename
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 15)
    const fileExtension = path.extname(file.name)
    const filename = `${timestamp}-${randomString}${fileExtension}`
    
    // Define upload path
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', folder)
    const filepath = path.join(uploadDir, filename)

    // Ensure upload directory exists
    try {
      await mkdir(uploadDir, { recursive: true })
    } catch (err) {
      console.log('Directory already exists or cannot be created')
    }

    // Write file to disk
    await writeFile(filepath, buffer)

    // Return relative path for database
    const relativePath = `/uploads/${folder}/${filename}`

    return NextResponse.json({ 
      success: true, 
      filePath: relativePath 
    })

  } catch (error) {
    console.error('Upload error details:', error)
    return NextResponse.json(
      { error: 'Failed to upload file: ' + error.message },
      { status: 500 }
    )
  }
}

export const runtime = 'nodejs'
