'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center px-32 py-6">
        {/* FloDoc Branding */}
        <div className="text-2xl font-bold text-gray-900">
          FloDoc
        </div>
        
        {/* Create Admin Account Button */}
        <Link href="/register">
          <Button 
            variant="outline" 
            className="bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Create Admin Account
          </Button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-32 py-12">
        <div className="w-full max-w-md">
          {/* Sign In Card */}
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardContent className="p-8">
              {/* Sign In Title */}
              <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Sign In
              </h1>

              {/* Sign In Form */}
              <form className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>

                {/* Sign In Button */}
                <Link href="/home">
                  <Button 
                    type="submit"
                    className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    SIGN IN
                  </Button>
                </Link>
              </form>

              {/* Social Sign In */}
              <div className="mt-8 space-y-8">
                {/* Google Sign In */}
                <Link href="/home">
                  <Button 
                    variant="outline" 
                    className="w-full py-3 border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#6B7280" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#6B7280" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#6B7280" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#6B7280" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-gray-700 font-medium">SIGN IN WITH GOOGLE</span>
                  </Button>
                </Link>

                {/* Microsoft Sign In */}
                <Link href="/home">
                  <Button 
                    variant="outline" 
                    className="w-full py-3 border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center gap-3 mt-6"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#6B7280" d="M11.4 11.4H2.6V2.6h8.8v8.8z"/>
                      <path fill="#6B7280" d="M21.4 11.4h-8.8V2.6h8.8v8.8z"/>
                      <path fill="#6B7280" d="M11.4 21.4H2.6v-8.8h8.8v8.8z"/>
                      <path fill="#6B7280" d="M21.4 21.4h-8.8v-8.8h8.8v8.8z"/>
                    </svg>
                    <span className="text-gray-700 font-medium">SIGN IN WITH MICROSOFT</span>
                  </Button>
                </Link>
              </div>

              {/* Footer Links */}
              <div className="mt-8 flex items-center justify-between text-sm">
                <Link href="/register">
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-gray-600 hover:text-gray-800 font-medium"
                  >
                    Create Admin Account
                  </Button>
                </Link>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-gray-600 hover:text-gray-800 font-medium"
                >
                  Forgot your password?
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}