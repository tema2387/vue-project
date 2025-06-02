type TypeData = {
    title: string,
    price: string,
    poss: string[],
}

export const bestPlans:TypeData[] = [
    { title: 'Starter', price: 'Free', poss: ['14-days free trial'] },
    { title: 'Pro', price: '$7.5/Month', poss: ['14-days free trial', 'Product Support', 'Email Support', 'Integrations', 'Removal of Front branding'] },
    { title: 'Enterprice', price: '$16/Month', poss: ['14-days free trial', 'No user limit', 'Product Support', 'Integrations', 'Removal of Front branding', 'Active maintenance & support', 'Data storage for 365 days'] }
]