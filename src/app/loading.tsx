import Spinner from '@/components/ui/Spinner'

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <Spinner size={32} className="text-brand-500" />
    </div>
  )
}
