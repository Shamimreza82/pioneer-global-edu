'use client'

import { useState } from 'react'
import {
  Plus, Search, Edit, Trash2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const SAMPLE_STUDENTS = [
  { id: '1', name: 'John Doe', email: 'john@example.com', phone: '+1234567890', country: 'USA', university: 'Stanford University', course: 'Computer Science', intake: 'Fall 2025', status: 'active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', phone: '+1234567891', country: 'UK', university: 'Oxford University', course: 'Law', intake: 'Fall 2025', status: 'active' },
]

export default function StudentsPage() {
  const [search, setSearch] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Students</h1>
          <p className="text-muted-foreground">Manage student records</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Student
        </Button>
      </div>

      <div className="flex gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search students..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>

      <div className="rounded-xl border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-4 font-medium">Name</th>
                <th className="text-left p-4 font-medium">Email</th>
                <th className="text-left p-4 font-medium">Country</th>
                <th className="text-left p-4 font-medium">University</th>
                <th className="text-left p-4 font-medium">Course</th>
                <th className="text-left p-4 font-medium">Intake</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {SAMPLE_STUDENTS.map((student) => (
                <tr key={student.id} className="border-b hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">{student.name}</td>
                  <td className="p-4 text-muted-foreground">{student.email}</td>
                  <td className="p-4">{student.country}</td>
                  <td className="p-4">{student.university}</td>
                  <td className="p-4">{student.course}</td>
                  <td className="p-4">{student.intake}</td>
                  <td className="p-4">
                    <Badge variant="success">{student.status}</Badge>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4 text-destructive" /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
