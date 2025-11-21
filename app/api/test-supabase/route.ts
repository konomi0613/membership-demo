import { createClient } from '@/app/_libs/supabase/client'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Supabaseへの接続テスト
    const client = createClient()
    const { data, error } = await client.from('users').select('count')
    
    if (error) {
      console.error('Supabase connection error:', error)
      return NextResponse.json(
        { 
          success: false, 
          message: 'Supabase接続エラー',
          error: error.message 
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Supabase接続成功！',
      data 
    })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: '予期しないエラーが発生しました',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}