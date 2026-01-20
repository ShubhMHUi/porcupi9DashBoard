import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Plan {
  id: string
  name: string
  price: string
  currency: string
  period: string
  features: string[]
  recommended: boolean
  gradient: string
  buttonVariant: 'solid' | 'outline' | 'soft' | 'ghost' | 'link'
}

export const usePlansStore = defineStore('plans', () => {
  const plans = ref<Plan[]>([
    {
      id: 'basic',
      name: 'Basic',
      price: '0',
      currency: '₹',
      period: '/month',
      features: [
        '1,000 AI Credits',
        'Basic Analytics',
        'Single User',
        'Community Support',
        'Standard API Access',
      ],
      recommended: false,
      gradient: 'from-gray-500/20 to-gray-500/5',
      buttonVariant: 'outline',
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '499',
      currency: '₹',
      period: '/month',
      features: [
        '10,000 AI Credits',
        'Advanced Analytics',
        'Up to 5 Users',
        'Priority Email Support',
        'Faster API Access',
        'Custom Webhooks',
      ],
      recommended: true,
      gradient: 'from-teal-500/20 to-teal-500/5 ring-2 ring-teal-500',
      buttonVariant: 'solid',
    },
    {
      id: 'plus',
      name: 'Plus',
      price: '999',
      currency: '₹',
      period: '/month',
      features: [
        'Unlimited AI Credits',
        'Real-time Analytics',
        'Unlimited Users',
        '24/7 Phone Support',
        'Dedicated API Server',
        'Custom Integrations',
        'SSO Authentication',
      ],
      recommended: false,
      gradient: 'from-purple-500/20 to-purple-500/5',
      buttonVariant: 'soft',
    },
  ])

  return {
    plans,
  }
})
