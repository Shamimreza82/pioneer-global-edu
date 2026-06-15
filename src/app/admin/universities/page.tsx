'use client'

import { useState } from 'react'
import { Plus, Search, Edit, Trash2, Globe, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Select } from '@/components/ui/select'
import { COUNTRIES } from '@/constants'
import type React from 'react'

const SAMPLE_UNIVERSITIES = [
  { id: '1', name: 'Stanford University', country: 'USA', ranking: 3, location: 'Stanford, California', website: 'https://stanford.edu' },
  { id: '2', name: 'University of Oxford', country: 'UK', ranking: 1, location: 'Oxford, England', website: 'https://ox.ac.uk' },
  { id: '3', name: 'University of Toronto', country: 'Canada', ranking: 18, location: 'Toronto, Ontario', website: 'https://utoronto.ca' },
]

export default function AdminUniversitiesPage() {
  const [search, setSearch] = useState('')
  const [country, setCountry] = useState('')

  const filtered = SAMPLE_UNIVERSITIES.filter((u) => {
    if (search && !u.name.toLowerCase().includes(search.toLowerCase())) return false
    if (country && u.country !== country) return false
    return true
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Universities</h1>
          <p className="text-muted-foreground">Manage partner universities</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add University
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search universities..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <Select
          placeholder="All Countries"
          options={COUNTRIES.map((c) => ({ value: c.name, label: c.name }))}
          value={country}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCountry(e.target.value)}
          className="w-full sm:w-40"
        />
      </div>

      <div className="rounded-xl border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-4 font-medium">University</th>
                <th className="text-left p-4 font-medium">Country</th>
                <th className="text-left p-4 font-medium">Ranking</th>
                <th className="text-left p-4 font-medium">Location</th>
                <th className="text-left p-4 font-medium">Website</th>
                <th className="text-left p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((uni) => (
                <tr key={uni.id} className="border-b hover:bg-muted/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <GraduationCap className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">{uni.name}</span>
                    </div>
                  </td>
                  <td className="p-4">{uni.country}</td>
                  <td className="p-4"><Badge variant="secondary">#{uni.ranking}</Badge></td>
                  <td className="p-4 text-muted-foreground">{uni.location}</td>
                  <td className="p-4">
                    <a href={uni.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                      <Globe className="h-3 w-3" /> Visit
                    </a>
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
