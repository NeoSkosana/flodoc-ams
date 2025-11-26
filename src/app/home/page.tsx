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

            <div className="mb-6">
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

            {/* Sponsoring Company */}
            <div className="mb-6">
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

            {/* SETA Type */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                SETA Type
              </label>
              <select
                value={setaType}
                onChange={(e) => setSetaType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="">Select SETA type</option>
                <option value="serviceseta">Services SETA</option>
                <option value="educationseta">Education, Training and Development Practices SETA</option>
                <option value="fasset">Finance, Accounting, Management Consulting SETA</option>
                <option value="wholesaleseta">Wholesale and Retail SETA</option>
                <option value="w&rseta">W&R SETA</option>
                <option value="tllpseta">Transport, Logistics and Supply Chain SETA</option>
                <option value="mictseta">Media, Information and Communication Technologies SETA</option>
                <option value="miset">Manufacturing, Engineering and Related Services SETA</option>
                <option value="agriseta">Agriculture and Nature Conservation SETA</option>
                <option value="ceta">Construction Education and Training Authority</option>
                <option value="ealthseta">Health and Welfare Sector Education and Training Authority</option>
                <option value="pseta">Public Service Sector Education and Training Authority</option>
                <option value="lgseta">Local Government, Water and Related Services SETA</option>
                <option value="cathsseta">Culture, Arts, Tourism, Hospitality and Sport Sector Education and Training Authority</option>
                <option value="etdpseta">Economic and Development Sector Education and Training Authority</option>
                <option value="inseta">Insurance SETA</option>
                <option value="bankseta">Banking Sector Education and Training Authority</option>
                <option value="primaryseta">Primary Agriculture SETA</option>
                <option value="foodbevseta">Food and Beverages Manufacturing Industry SETA</option>
                <option value="forestseta">Forestry and Related Industries SETA</option>
              </select>
            </div>

            {/* Program Type */}
            <div className="mb-6">
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

            {/* Qualification Type */}
            <div className="mb-6">
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

            {/* Qualification Checkboxes */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Qualifications
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-sm">
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
                  <span>Certified IDs</span>
                </label>
                <label className="flex items-center gap-3 text-sm">
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
                <label className="flex items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedQualifications.includes('qualifications')}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedQualifications([...selectedQualifications, 'qualifications'])
                      } else {
                        setSelectedQualifications(selectedQualifications.filter(q => q !== 'qualifications'))
                      }
                    }}
                    className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-2 focus:ring-gray-500"
                  />
                  <span>Qualifications</span>
                </label>
              </div>
            </div>
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