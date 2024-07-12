import React from 'react'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Menu } from 'lucide-react'
import { Button } from './button'
import { ContactDialog } from './1 - contact-dialog'


export default function MobileDrawer({ ...props }) {
  return (
    <Drawer className="" {...props}>
      <DrawerTrigger className='mt-2'>
        <Menu size={24} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerFooter>
          <a href="/" className="text-black">
            <Button variant='outline' className="w-full">Home</Button>
          </a>
          <Button variant='outline' className="w-full">
            <ContactDialog className="w-full" />
          </Button>
          
        </DrawerFooter>
      </DrawerContent>
    </Drawer>

  )
}
