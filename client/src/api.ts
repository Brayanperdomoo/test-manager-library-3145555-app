export type Page<T> = { items: T[]; page: number; size: number; total: number }
export type Category = { id: string; name: string }
export type Book = { id: string; title: string; author: string; isbn: string; category: { id: string; name: string }; total_copies: number; available_copies: number; cover_key: string | null }
export type Member = { id: string; full_name: string; document_number: string; active_loans?: number }
export type LoanItem = { id: string; book_id: string; book_title: string; isbn: string; category_name: string; due_at: string; returned_at: string | null }
export type Loan = { id: string; member_id: string; loaned_at: string; status: 'open' | 'overdue' | 'closed'; items: LoanItem[] }
export type ReportRow = { book_id: string; book_title: string; category_name: string; times_borrowed: number }
const API_URL = (import.meta.env.VITE_API_URL ?? '/api/v1').replace(/\/$/, '')
export const getToken = () => localStorage.getItem('manager-library-token')
export async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers); headers.set('Accept', 'application/json')
  if (init.body && !(init.body instanceof FormData)) headers.set('Content-Type', 'application/json')
  const token = getToken(); if (token) headers.set('Authorization', `Bearer ${token}`)
  const response = await fetch(`${API_URL}${path}`, { ...init, headers })
  if (response.status === 204) return undefined as T
  const body = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(body.message ?? `Request failed (${response.status})`)
  return body as T
}
