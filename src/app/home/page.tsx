'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Upload, 
  Plus, 
  User,
  Bell,
  ChevronDown,
  Search
} from 'lucide-react'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'

export default function HomePage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [cohortName, setCohortName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [sponsoringCompany, setSponsoringCompany] = useState('')
  const [programType, setProgramType] = useState('')
  const [qualificationType, setQualificationType] = useState('')
  const [setaType, setSetaType] = useState('')
  const [selectedQualifications, setSelectedQualifications] = useState<string[]>([])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex justify-between items-center px-32 py-4 border-b border-gray-200 shadow-sm">
        <div className="text-2xl font-bold text-gray-900">
          FloDoc
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
            <Search className="w-5 h-5" />
          </Button>
          
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
            <Bell className="w-5 h-5" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                <User className="w-5 h-5" />
                <ChevronDown className="w-3 h-3 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/profile" className="w-full">
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/" className="w-full">
                  Sign Out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="px-32 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Cohorts
            </h1>
            
            <div className="flex items-center gap-3">
              <Button 
                className="bg-gray-800 hover:bg-gray-700 text-white"
                onClick={() => setIsCreateModalOpen(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                CREATE NEW COHORT
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Card className="border-2 border-dashed border-gray-300 bg-white shadow-sm">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <Upload className="w-8 h-8 text-gray-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Upload a document to create a new cohort
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Click to upload or drag and drop
                </p>
                
                <p className="text-sm text-gray-500">
                  Or add from Google Drive
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button 
            variant="link" 
            className="text-gray-600 hover:text-gray-800 font-medium"
          >
            View Archived
          </Button>
        </div>
      </main>

      <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Create New Cohort</DialogTitle>
            <DialogDescription>
              Fill in the details to create a new cohort
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Cohort Name
              </label>
              <input
                type="text"
                value={cohortName}
                onChange={(e) => setCohortName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="Enter cohort name"
              />
            </div>

            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">Date Range</div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-sm text-gray-600 mb-1 block">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm text-gray-600 mb-1 block">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Sponsoring Company
              </label>
              <select
                value={sponsoringCompany}
                onChange={(e) => setSponsoringCompany(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="">Select company</option>
                <option value="safaricom">Safaricom</option>
                <option value="mtn">MTN</option>
                <option value="vodacom">Vodacom</option>
                <option value="airtel">Airtel</option>
                <option value="telkom">Telkom SA</option>
                <option value="liquid">Liquid Telecom</option>
                <option value="rain">Rain</option>
                <option value="cell-c">Cell C</option>
                <option value="neotel">Neotel</option>
              </select>
            </div>

            <div className="border-t pt-4">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Program Type
              </label>
              <select
                value={programType}
                onChange={(e) => setProgramType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="">Select program type</option>
                <option value="learnership">Learnership</option>
                <option value="internship">Internship</option>
                <option value="candidates">Candidates in Program</option>
              </select>
            </div>

            <div className="border-t pt-4">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Qualification Type
              </label>
              <select
                value={qualificationType}
                onChange={(e) => setQualificationType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="">Select qualification type</option>
                <option value="seta">SETA</option>
              </select>
            </div>

            {qualificationType === 'seta' && (
              <div className="border-t pt-4">
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  SETA Type
                </label>
                <select
                  value={setaType}
                  onChange={(e) => setSetaType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                >
                  <option value="">Select SETA type</option>
                  <option value="nqf-level-1">NQF Level 1</option>
                  <option value="nqf-level-2">NQF Level 2</option>
                  <option value="nqf-level-3">NQF Level 3</option>
                  <option value="nqf-level-4">NQF Level 4</option>
                  <option value="nqf-level-5">NQF Level 5</option>
                  <option value="nqf-level-6">NQF Level 6</option>
                  <option value="nqf-level-7">NQF Level 7</option>
                  <option value="nqf-level-8">NQF Level 8</option>
                  <option value="nqf-level-9">NQF Level 9</option>
                  <option value="nqf-level-10">NQF Level 10</option>
                  <option value="nqf-level-11">NQF Level 11</option>
                  <option value="nqf-level-12">NQF Level 12</option>
                  <option value="nqf-level-13">NQF Level 13</option>
                  <option value="nqf-level-14">NQF Level 14</option>
                  <option value="nqf-level-15">NQF Level 15</option>
                  <option value="nqf-level-16">NQF Level 16</option>
                  <option value="nqf-level-17">NQF Level 17</option>
                  <option value="nqf-level-18">NQF Level 18</option>
                  <option value="nqf-level-19">NQF Level 19</option>
                  <option value="nqf-level-20">NQF Level 20</option>
                  <option value="nqf-level-21">NQF Level 21</option>
                </select>
              </div>
            )}

            {qualificationType === 'seta' && (
              <div className="border-t pt-4">
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Qualifications
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={selectedQualifications.includes('certified-id')}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedQualifications([...selectedQualifications, 'certified-id'])
                        } else {
                          setSelectedQualifications(selectedQualifications.filter(q => q !== 'certified-id'))
                        }
                      }}
                      className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-2 focus:ring-gray-500"
                    />
                    <span>Certified ID</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={selectedQualifications.includes('certified-matric')}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedQualifications([...selectedQualifications, 'certified-matric'])
                        } else {
                          setSelectedQualifications(selectedQualifications.filter(q => q !== 'certified-matric'))
                        }
                      }}
                      className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-2 focus:ring-gray-500"
                    />
                    <span>Certified Matric</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={selectedQualifications.includes('tertiary-qualification')}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedQualifications([...selectedQualifications, 'tertiary-qualification'])
                        } else {
                          setSelectedQualifications(selectedQualifications.filter(q => q !== 'tertiary-qualification'))
                        }
                      }}
                      className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-2 focus:ring-gray-500"
                    />
                    <span>Tertiary Qualification</span>
                  </label>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-6 border-t">
            <Button 
              variant="outline" 
              onClick={() => setIsCreateModalOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              className="bg-gray-800 hover:bg-gray-700 text-white"
              onClick={() => {
                setIsCreateModalOpen(false)
              }}
            >
              Create
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}