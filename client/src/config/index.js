import { Cuboid, DatabaseZap, Layers, UserCheck } from "lucide-react"


export const SignUpFormControls = [
    {
        name: 'userName',
        label: 'User Name',
        placeholder: "Enter Your First Name",
        componentType: "input",
        type: "text",

    },
    {
        name: 'email',
        label: 'Email',
        placeholder: "Enter  Email",
        componentType: "input",
        type: "email",

    },
    {
        name: 'password',
        label: 'Password',
        placeholder: "Enter Password",
        componentType: "input",
        type: "password",

    },
]


export const LoginFormControls = [

    {
        name: 'email',
        label: 'Email',
        placeholder: "Enter  Email",
        componentType: "input",
        type: "email",

    },
    {
        name: 'password',
        label: 'Password',
        placeholder: "Enter Password",
        componentType: "input",
        type: "password",

    },
]


export const sidebarComponent = [
    {
        id: 'dashboard',
        label: 'DashBoard',
        icons: <DatabaseZap className="text-[#096723de]" />,
        path: '/admin/dashboard'
    },
    {
        id: 'ProductClient',
        label: 'Products',
        icons: <Cuboid className="text-[#096723de]" />,
        path: '/admin/Products'
    },
    {
        id: 'Orders',
        label: 'Orders',
        icons: <Layers className="text-[#096723de]" />,
        path: '/admin/orders'
    },
    {
        id: 'Users',
        label: 'Users',
        icons: <UserCheck className='text-[#096723de]' />,
        path: '/admin/users'
    },
]