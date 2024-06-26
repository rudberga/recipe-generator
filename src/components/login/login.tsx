import { useRouter } from 'next/router'
import { FC, useState } from 'react'

import { createClient } from '@/utils/supabase/component'

const Login: FC = () => {
  const router = useRouter()
  const supabase = createClient()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function logIn() {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      console.error(error)
    }
    router.push('/')
  }

  async function signUp() {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      console.error(error)
    }
    router.push('/')
  }

  return (
    <main>
      <form>
        <label htmlFor="email">E-mail:</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Lösenord:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={logIn}>
          Logga in
        </button>
        <button type="button" onClick={signUp}>
          Registrera dig
        </button>
      </form>
    </main>
  )
}

export default Login