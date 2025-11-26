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
  ChevronDown
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function HomePage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [cohortName, setCohortName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [sponsoringCompany, setSponsoringCompany] = useState('')
  const [programType, setProgramType] = useState('')
  const [qualificationType, setQualificationType] = useState('')
  const [setaType, setSetaType] = useState('')
  const [activeTab, setActiveTab] = useState('computer')

  // SETA qualifications mapping
  const setaQualifications: { [key: string]: string[] } = {
    'serviceseta': [
      'National Certificate: Project Management (NQF Level 5)',
      'National Certificate: Business Administration (NQF Level 5)',
      'National Certificate: Wholesale and Retail (NQF Level 5)',
      'Further Education and Training Certificate: Project Management (NQF Level 4)',
      'National Certificate: Contact Centre Support (NQF Level 5)',
      'National Certificate: Skills Development Facilitation (NQF Level 5)',
      'National Certificate: Coaching (NQF Level 5)',
      'National Certificate: Community Development (NQF Level 5)',
      'National Certificate: Youth Development (NQF Level 5)',
      'National Certificate: Assessment Design and Development (NQF Level 5)'
    ],
    'educationseta': [
      'National Certificate: Early Childhood Development (NQF Level 5)',
      'National Certificate: Technical and Vocational Teaching (NQF Level 5)',
      'National Diploma: Technical and Vocational Teaching (NQF Level 6)',
      'Bachelor of Education (NQF Level 7)',
      'Postgraduate Certificate in Education (NQF Level 7)',
      'Advanced Certificate in Teaching (NQF Level 6)',
      'National Certificate: School Management and Leadership (NQF Level 5)',
      'National Certificate: Curriculum Development (NQF Level 5)',
      'National Certificate: Assessment (NQF Level 5)',
      'National Certificate: Learning Support (NQF Level 5)'
    ],
    'fasset': [
      'National Certificate: Business Accounting (NQF Level 5)',
      'National Diploma: Management Accounting (NQF Level 6)',
      'National Certificate: Technical Financial Accounting (NQF Level 5)',
      'National Certificate: Bookkeeping (NQF Level 4)',
      'National Certificate: Business Administration (NQF Level 5)',
      'National Certificate: Project Management (NQF Level 5)',
      'National Certificate: Financial Management (NQF Level 5)',
      'National Certificate: Internal Auditing (NQF Level 5)',
      'National Certificate: Tax Administration (NQF Level 5)',
      'National Certificate: Risk Management (NQF Level 5)',
      'National Certificate: Office Administration (NQF Level 5)',
      'National Certificate: Human Resource Management (NQF Level 5)'
    ],
    'wholesaleseta': [
      'National Certificate: Wholesale and Retail Operations (NQF Level 5)',
      'National Certificate: Retail Store Management (NQF Level 4)',
      'National Certificate: Wholesale and Retail Distribution (NQF Level 2)',
      'National Certificate: Buying and Supply Chain Management (NQF Level 5)',
      'National Certificate: Visual Merchandising (NQF Level 4)',
      'National Certificate: Retail Supervision (NQF Level 4)',
      'National Certificate: Store Operations (NQF Level 3)',
      'National Certificate: Sales Management (NQF Level 5)',
      'National Certificate: Customer Service (NQF Level 4)',
      'National Certificate: E-commerce (NQF Level 5)',
      'National Certificate: Logistics Operations (NQF Level 4)',
      'National Certificate: Warehouse Management (NQF Level 4)'
    ],
    'tllpseta': [
      'National Certificate: Freight Handling (NQF Level 3)',
      'National Certificate: Logistics Management (NQF Level 5)',
      'National Certificate: Supply Chain Management (NQF Level 5)',
      'National Certificate: Road Transport (NQF Level 4)',
      'National Certificate: Rail Operations (NQF Level 4)',
      'National Certificate: Maritime Operations (NQF Level 5)',
      'National Certificate: Aviation Operations (NQF Level 5)',
      'National Certificate: Public Transport Operations (NQF Level 4)',
      'National Certificate: Warehousing and Distribution (NQF Level 4)',
      'National Certificate: Customs Clearing (NQF Level 5)',
      'National Certificate: Transport Economics (NQF Level 5)',
      'National Certificate: Fleet Management (NQF Level 5)'
    ],
    'mictseta': [
      'National Certificate: Information Technology: End User Computing (NQF Level 3)',
      'National Certificate: IT Technical Support (NQF Level 4)',
      'National Certificate: IT Systems Support (NQF Level 5)',
      'National Certificate: IT Systems Development (NQF Level 5)',
      'National Certificate: Systems Development (NQF Level 4)',
      'National Certificate: Telecommunications (NQF Level 4)',
      'National Certificate: Software Development (NQF Level 5)',
      'National Certificate: Network Engineering (NQF Level 5)',
      'National Certificate: Database Development (NQF Level 5)',
      'National Certificate: Web Development (NQF Level 5)',
      'National Certificate: Cyber Security (NQF Level 5)',
      'National Certificate: Data Science (NQF Level 5)',
      'National Certificate: Digital Marketing (NQF Level 5)'
    ],
    'miset': [
      'National Certificate: Manufacturing Operations (NQF Level 4)',
      'National Certificate: Engineering Technology (NQF Level 5)',
      'National Certificate: Mechanical Engineering (NQF Level 5)',
      'National Certificate: Electrical Engineering (NQF Level 5)',
      'National Certificate: Civil Engineering (NQF Level 5)',
      'National Certificate: Chemical Engineering (NQF Level 5)',
      'National Certificate: Industrial Engineering (NQF Level 5)',
      'National Certificate: Production Management (NQF Level 5)',
      'National Certificate: Quality Management (NQF Level 5)',
      'National Certificate: Maintenance Management (NQF Level 5)',
      'National Certificate: Engineering Design (NQF Level 5)',
      'National Certificate: Manufacturing Technology (NQF Level 5)',
      'National Certificate: Process Control (NQF Level 5)'
    ],
    'agriseta': [
      'National Certificate: Agriculture Plant Production (NQF Level 4)',
      'National Certificate: Animal Production (NQF Level 4)',
      'National Certificate: Mixed Farming Systems (NQF Level 4)',
      'National Certificate: Horticulture (NQF Level 4)',
      'National Certificate: Agricultural Management (NQF Level 5)',
      'National Certificate: Nature Conservation (NQF Level 5)',
      'National Certificate: Environmental Management (NQF Level 5)',
      'National Certificate: Agricultural Extension (NQF Level 5)',
      'National Certificate: Farm Management (NQF Level 4)',
      'National Certificate: Crop Production (NQF Level 4)',
      'National Certificate: Soil Science (NQF Level 5)',
      'National Certificate: Irrigation Design (NQF Level 5)',
      'National Certificate: Agricultural Research (NQF Level 5)'
    ],
    'ceta': [
      'National Certificate: Construction Management (NQF Level 5)',
      'National Certificate: Building and Civil Construction (NQF Level 4)',
      'National Certificate: Carpentry and Joinery (NQF Level 4)',
      'National Certificate: Plumbing (NQF Level 4)',
      'National Certificate: Electrical Installation (NQF Level 4)',
      'National Certificate: Painting and Decorating (NQF Level 3)',
      'National Certificate: Bricklaying (NQF Level 3)',
      'National Certificate: Tiling (NQF Level 3)',
      'National Certificate: Plastering (NQF Level 3)',
      'National Certificate: Roofing (NQF Level 3)',
      'National Certificate: Construction Safety (NQF Level 4)',
      'National Certificate: Project Management (Construction) (NQF Level 5)'
    ],
    'ealthseta': [
      'National Certificate: Health Care Assistance (NQF Level 4)',
      'National Certificate: Nursing (NQF Level 5)',
      'National Certificate: Pharmacy Assistance (NQF Level 4)',
      'National Certificate: Social Work (NQF Level 5)',
      'National Certificate: Child and Youth Care (NQF Level 4)',
      'National Certificate: Health Promotion (NQF Level 5)',
      'National Certificate: Community Health Work (NQF Level 5)',
      'National Certificate: Mental Health Care (NQF Level 5)',
      'National Certificate: Disability Care (NQF Level 4)',
      'National Certificate: Elderly Care (NQF Level 4)',
      'National Certificate: First Aid Level 1, 2, 3 (NQF Level 1-3)',
      'National Certificate: Occupational Health and Safety (NQF Level 5)'
    ],
    'pseta': [
      'National Certificate: Public Administration (NQF Level 5)',
      'National Certificate: Local Government Administration (NQF Level 5)',
      'National Certificate: Public Finance Management (NQF Level 5)',
      'National Certificate: Public Management (NQF Level 5)',
      'National Certificate: Municipal Finance (NQF Level 5)',
      'National Certificate: Municipal Governance (NQF Level 5)',
      'National Certificate: Public Policy Development (NQF Level 5)',
      'National Certificate: Public Sector Communication (NQF Level 5)',
      'National Certificate: Public Sector Leadership (NQF Level 5)',
      'National Certificate: Public Service Ethics (NQF Level 5)',
      'National Certificate: Project Management (Public Sector) (NQF Level 5)',
      'National Certificate: Monitoring and Evaluation (NQF Level 5)'
    ],
    'lgseta': [
      'National Certificate: Local Government Management (NQF Level 5)',
      'National Certificate: Municipal Finance (NQF Level 5)',
      'National Certificate: Water and Wastewater Treatment (NQF Level 5)',
      'National Certificate: Municipal Services Management (NQF Level 5)',
      'National Certificate: Local Economic Development (NQF Level 5)',
      'National Certificate: Community Development (NQF Level 5)',
      'National Certificate: Urban Planning (NQF Level 5)',
      'National Certificate: Environmental Health (NQF Level 5)',
      'National Certificate: Water Services Management (NQF Level 5)',
      'National Certificate: Local Government Accounting (NQF Level 5)',
      'National Certificate: Municipal Governance (NQF Level 5)',
      'National Certificate: Infrastructure Planning (NQF Level 5)'
    ],
    'cathsseta': [
      'National Certificate: Tourism Management (NQF Level 5)',
      'National Certificate: Hospitality Management (NQF Level 5)',
      'National Certificate: Professional Cookery (NQF Level 4)',
      'National Certificate: Food and Beverage Management (NQF Level 5)',
      'National Certificate: Event Management (NQF Level 5)',
      'National Certificate: Sports Management (NQF Level 5)',
      'National Certificate: Arts and Culture Management (NQF Level 5)',
      'National Certificate: Tourist Guiding (NQF Level 4)',
      'National Certificate: Hotel Operations (NQF Level 4)',
      'National Certificate: Restaurant Management (NQF Level 5)',
      'National Certificate: Creative Arts (NQF Level 4)',
      'National Certificate: Cultural Heritage Management (NQF Level 5)'
    ],
    'etdpseta': [
      'National Certificate: Development Practice (NQF Level 5)',
      'National Certificate: Economic Management (NQF Level 5)',
      'National Certificate: Local Economic Development (NQF Level 5)',
      'National Certificate: Rural Development (NQF Level 5)',
      'National Certificate: Urban Development (NQF Level 5)',
      'National Certificate: Project Management (Development) (NQF Level 5)',
      'National Certificate: Monitoring and Evaluation (NQF Level 5)',
      'National Certificate: Policy Analysis (NQF Level 5)',
      'National Certificate: Community Development (NQF Level 5)',
      'National Certificate: Social Research (NQF Level 5)',
      'National Certificate: Development Planning (NQF Level 5)',
      'National Certificate: Economic Policy (NQF Level 5)'
    ],
    'inseta': [
      'National Certificate: Insurance (NQF Level 5)',
      'National Certificate: Risk Management (NQF Level 5)',
      'National Certificate: Financial Planning (NQF Level 5)',
      'National Certificate: Insurance Sales (NQF Level 4)',
      'National Certificate: Claims Management (NQF Level 5)',
      'National Certificate: Underwriting (NQF Level 5)',
      'National Certificate: Reinsurance (NQF Level 5)',
      'National Certificate: Insurance Brokerage (NQF Level 5)',
      'National Certificate: Loss Adjusting (NQF Level 5)',
      'National Certificate: Actuarial Science (NQF Level 6)',
      'National Certificate: Insurance Marketing (NQF Level 5)'
    ],
    'bankseta': [
      'National Certificate: Banking (NQF Level 5)',
      'National Certificate: Microfinance (NQF Level 5)',
      'National Certificate: Financial Services (NQF Level 5)',
      'National Certificate: Credit Management (NQF Level 5)',
      'National Certificate: Treasury Management (NQF Level 5)',
      'National Certificate: Investment Management (NQF Level 5)',
      'National Certificate: Risk Management (Banking) (NQF Level 5)',
      'National Certificate: Compliance (Banking) (NQF Level 5)',
      'National Certificate: Financial Advisory (NQF Level 5)',
      'National Certificate: Branch Management (NQF Level 5)',
      'National Certificate: Digital Banking (NQF Level 5)'
    ],
    'primaryseta': [
      'National Certificate: Primary Agriculture (NQF Level 4)',
      'National Certificate: Agricultural Extension (NQF Level 5)',
      'National Certificate: Farm Management (NQF Level 4)',
      'National Certificate: Crop Production (Primary) (NQF Level 4)',
      'National Certificate: Animal Husbandry (NQF Level 4)',
      'National Certificate: Agricultural Education (NQF Level 5)',
      'National Certificate: Sustainable Agriculture (NQF Level 5)',
      'National Certificate: Agribusiness Management (NQF Level 5)',
      'National Certificate: Agricultural Mechanization (NQF Level 4)',
      'National Certificate: Soil Conservation (NQF Level 5)',
      'National Certificate: Irrigation Management (NQF Level 5)',
      'National Certificate: Agricultural Marketing (NQF Level 5)'
    ],
    'foodbevseta': [
      'National Certificate: Food and Beverage Manufacturing (NQF Level 4)',
      'National Certificate: Food Processing (NQF Level 4)',
      'National Certificate: Beverage Manufacturing (NQF Level 4)',
      'National Certificate: Food Technology (NQF Level 5)',
      'National Certificate: Food Laboratory Analysis (NQF Level 5)',
      'National Certificate: Food Safety Management (NQF Level 5)',
      'National Certificate: Quality Control (Food) (NQF Level 5)',
      'National Certificate: Food Engineering (NQF Level 5)',
      'National Certificate: Packaging Technology (NQF Level 4)',
      'National Certificate: Nutrition (NQF Level 5)',
      'National Certificate: Food Service Management (NQF Level 5)',
      'National Certificate: Catering Management (NQF Level 5)'
    ],
    'forestseta': [
      'National Certificate: Forestry (NQF Level 4)',
      'National Certificate: Wood Processing (NQF Level 4)',
      'National Certificate: Forest Management (NQF Level 5)',
      'National Certificate: Timber Harvesting (NQF Level 3)',
      'National Certificate: Sawmilling (NQF Level 4)',
      'National Certificate: Furniture Making (NQF Level 4)',
      'National Certificate: Pulp and Paper (NQF Level 5)',
      'National Certificate: Forest Conservation (NQF Level 5)',
      'National Certificate: Forest Engineering (NQF Level 5)',
      'National Certificate: Wood Technology (NQF Level 5)',
      'National Certificate: Forest Fire Management (NQF Level 4)',
      'National Certificate: Forest Economics (NQF Level 5)'
    ],
    'mqa': [
      'National Certificate: Mining Operations (NQF Level 4)',
      'National Certificate: Mine Surveying (NQF Level 4)',
      'National Certificate: Rock Engineering (NQF Level 5)',
      'National Certificate: Mining Engineering (NQF Level 5)',
      'National Certificate: Mineral Processing (NQF Level 5)',
      'National Certificate: Mine Safety Management (NQF Level 5)',
      'National Certificate: Mine Environmental Management (NQF Level 5)',
      'National Certificate: Mine Planning (NQF Level 5)',
      'National Certificate: Mining Geology (NQF Level 5)',
      'National Certificate: Mining Economics (NQF Level 5)',
      'National Certificate: Mine Management (NQF Level 5)'
    ],
    'chieta': [
      'National Certificate: Chemical Operations (NQF Level 4)',
      'National Certificate: Process Control (Chemical) (NQF Level 5)',
      'National Certificate: Chemical Engineering (NQF Level 5)',
      'National Certificate: Industrial Chemistry (NQF Level 5)',
      'National Certificate: Petrochemical Operations (NQF Level 5)',
      'National Certificate: Laboratory Technology (Chemical) (NQF Level 4)',
      'National Certificate: Quality Control (Chemical) (NQF Level 5)',
      'National Certificate: Environmental Management (Chemical) (NQF Level 5)',
      'National Certificate: Chemical Safety (NQF Level 5)',
      'National Certificate: Process Engineering (NQF Level 5)',
      'National Certificate: Chemical Manufacturing (NQF Level 5)'
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex justify-between items-center px-32 py-4 border-b border-gray-200 shadow-sm">
        <div className="text-2xl font-bold text-gray-900">
          FloDoc
        </div>
        
        <div className="flex items-center gap-4">
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
          
          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="computer" className="rounded-full">Upload from Computer</TabsTrigger>
              <TabsTrigger value="google-drive" className="rounded-full">Upload from Google Drive</TabsTrigger>
            </TabsList>
            
            <TabsContent value="computer" className="mt-0">
              <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">Files supported: PDF, DOC, DOCX</p>
              </div>
            </TabsContent>
            
            <TabsContent value="google-drive" className="mt-0">
              <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                <div className="mx-auto h-12 w-12 text-gray-400 mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.27 19.385H1.73A1.73 1.73 0 010 17.655V6.345a1.73 1.73 0 011.73-1.73h20.54A1.73 1.73 0 0124 6.345v11.308a1.73 1.73 0 01-1.73 1.732zM5.769 15.923h8.961v-1.846H5.769v1.846zm-3.692-3.692h8.96v-1.846h-8.96v1.846zm0-3.692h8.96V6.692h-8.96v1.847zm11.653 0h8.962V6.692h-8.962v1.847zm0 3.692h8.962v-1.846h-8.962v1.846z"/>
                  </svg>
                </div>
                <p className="text-gray-600 mb-2">Connect to Google Drive</p>
                <p className="text-sm text-gray-500">Select files from your Google Drive</p>
              </div>
            </TabsContent>
          </Tabs>

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
                <option value="candidacy">Candidacy</option>
              </select>
            </div>

            {/* SETA Type (Functional dropdown) */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                SETA Type
              </label>
              <select
                value={setaType}
                onChange={(e) => {
                  setSetaType(e.target.value)
                  // Reset qualification type when SETA changes
                  setQualificationType('')
                }}
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
                <option value="mqa">Mining Qualifications Authority</option>
                <option value="chieta">Chemical Industries SETA</option>
              </select>
            </div>

            {/* Qualification Type */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Qualification
              </label>
              <select
                value={qualificationType}
                onChange={(e) => setQualificationType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="">Select qualification type</option>
                {setaType && setaQualifications[setaType]?.map((qualification, index) => (
                  <option key={index} value={qualification}>
                    {qualification}
                  </option>
                ))}
                <option value="non-seta">Non-SETA</option>
              </select>
            </div>

            {/* Qualification Checkboxes */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Requirements
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-2 focus:ring-gray-500"
                  />
                  <span>Certified IDs</span>
                </label>
                <label className="flex items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-2 focus:ring-gray-500"
                  />
                  <span>Certified Matric</span>
                </label>
                <label className="flex items-center gap-3 text-sm">
                  <input
                    type="checkbox"
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