'use client'

import Button from '@/components/button'

type PagseguroButtonProps = {
  className?: string
}

function PagseguroButton({ className }: PagseguroButtonProps) {
  return (
    <form
      action="https://pagseguro.uol.com.br/checkout/v2/donation.html"
      method="post"
      target="_blank"
      className={className}
    >
      <input type="hidden" name="currency" value="BRL" />
      <input
        type="hidden"
        name="receiverEmail"
        value="comunicacaosocialcvm@floripa.com.br"
      />
      <input type="hidden" name="iot" value="button" />
      <Button type="submit">Doar</Button>
    </form>
  )
}

export default PagseguroButton
