import path from 'path'
import fs from 'fs'
import { promises as fsp } from 'fs'

export const config = {
  api: {
    bodyParser: false,
  },
}

export async function saveFile(file, folder = 'products') {
  const uploadDir = path.join(process.cwd(), 'public', 'uploads', folder)
  
  // Ensure upload directory exists
  await fsp.mkdir(uploadDir, { recursive: true })
  
  // Generate unique filename
  const timestamp = Date.now()
  const originalName = file.originalFilename
  const extension = path.extname(originalName)
  const filename = `${timestamp}-${Math.random().toString(36).substring(2, 15)}${extension}`
  const filepath = path.join(uploadDir, filename)
  
  // Move file to upload directory
  await fsp.rename(file.filepath, filepath)
  
  // Return relative path for database storage
  return `/uploads/${folder}/${filename}`
}

export function deleteFile(filePath) {
  const fullPath = path.join(process.cwd(), 'public', filePath)
  return fsp.unlink(fullPath).catch(() => {})
}
