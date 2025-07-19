'use client'

import { useState, useEffect } from 'react'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { Divider } from '@/components/divider'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/dropdown'
import { Heading } from '@/components/heading'
import { Input, InputGroup } from '@/components/input'
import { Link } from '@/components/link'
import { Select } from '@/components/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/components/tabs'
import { getEvents } from '@/data'
import { EllipsisVerticalIcon, MagnifyingGlassIcon, Squares2X2Icon, TableCellsIcon } from '@heroicons/react/16/solid'

export default function Events() {
  const [activeTab, setActiveTab] = useState('cards')
  const [events, setEvents] = useState([])

  // Load events data
  useEffect(() => {
    getEvents().then(setEvents)
  }, [])

  const CardView = () => (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {events.map((event) => (
        <div key={event.id} className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:shadow-md transition-shadow">
          {/* Product Image */}
          <div className="aspect-3/2 bg-zinc-100 dark:bg-zinc-700">
            <Link href={event.url} aria-hidden="true">
              <img className="w-full h-full object-cover" src={event.imgUrl} alt="" />
            </Link>
          </div>

          {/* Product Details */}
          <div className="p-4 space-y-3">
            {/* Product Name & SKU */}
            <div>
              <div className="text-lg font-semibold text-zinc-900 dark:text-white truncate">
                <Link href={event.url}>{event.name}</Link>
              </div>
              <div className="text-sm text-zinc-500">
                SKU: PROD-{event.id.toString().padStart(3, '0')}
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-2">
              <div className="text-lg font-semibold text-zinc-900 dark:text-white">
                {event.totalRevenue}
              </div>
            </div>

            {/* Inventory */}
            <div className="text-sm">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Stock:</span>{' '}
              <span className="text-zinc-900 dark:text-white">
                {event.ticketsAvailable - event.ticketsSold}
              </span>
            </div>

            {/* Status Indicators */}
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-zinc-600 dark:text-zinc-400">Published</span>
                </div>
              </div>
              <Badge color="blue">
                Electronics
              </Badge>
            </div>

            {/* Actions */}
            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-700">
              <Dropdown>
                <DropdownButton plain aria-label="More options" className="w-full text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">Actions</span>
                    <EllipsisVerticalIcon className="w-4 h-4" />
                  </div>
                </DropdownButton>
                <DropdownMenu anchor="bottom end">
                  <DropdownItem href={event.url}>View</DropdownItem>
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem>Duplicate</DropdownItem>
                  <DropdownItem>Delete</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const TableView = () => (
    <Table className="[--gutter:--spacing(6)] lg:[--gutter:--spacing(10)]">
      <TableHead>
        <TableRow>
          <TableHeader>Product</TableHeader>
          <TableHeader>Pricing</TableHeader>
          <TableHeader>Inventory</TableHeader>
          <TableHeader>Category</TableHeader>
          <TableHeader className="text-right">Actions</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {events.map((event) => (
          <TableRow key={event.id} href={event.url} title={event.name}>
            <TableCell>
              <div className="flex items-center gap-4">
                <img className="w-12 h-8 rounded object-cover" src={event.thumbUrl} alt="" />
                <div>
                  <div className="font-medium text-zinc-900 dark:text-white">{event.name}</div>
                  <div className="text-sm text-zinc-500">SKU: PROD-{event.id.toString().padStart(3, '0')}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="text-sm space-y-1">
                <div className="text-lg font-semibold text-zinc-900 dark:text-white">{event.totalRevenue}</div>
              </div>
            </TableCell>
            <TableCell>
              <div className="text-sm space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-zinc-900 dark:text-white">
                    {event.ticketsAvailable - event.ticketsSold}
                  </span>
                  <span className="text-zinc-500">available</span>
                </div>
                <div className="text-xs text-orange-600 dark:text-orange-400">
                  Alert: 5 items
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="space-y-2">
                <Badge color="blue">
                  Electronics
                </Badge>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-zinc-500">Published</span>
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-right">
              <Dropdown>
                <DropdownButton plain aria-label="More options">
                  <EllipsisVerticalIcon />
                </DropdownButton>
                <DropdownMenu anchor="bottom end">
                  <DropdownItem href={event.url}>View</DropdownItem>
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem>Duplicate</DropdownItem>
                  <DropdownItem>Delete</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-sm:w-full sm:flex-1">
          <Heading>Products</Heading>
          <div className="mt-4 flex max-w-xl gap-4">
            <div className="flex-1">
              <InputGroup>
                <MagnifyingGlassIcon />
                <Input name="search" placeholder="Search products&hellip;" />
              </InputGroup>
            </div>
            <div>
              <Select name="sort_by">
                <option value="name">Sort by name</option>
                <option value="date">Sort by date</option>
                <option value="status">Sort by status</option>
              </Select>
            </div>
          </div>
        </div>
        <Button href="/events/new">New Product</Button>
      </div>

      <div className="mt-4">
        <TabGroup>
          <TabList>
            <Tab 
              active={activeTab === 'cards'} 
              onClick={() => setActiveTab('cards')}
            >
              <Squares2X2Icon className="w-5 h-5 mr-2" />
              Card View
            </Tab>
            <Tab 
              active={activeTab === 'table'} 
              onClick={() => setActiveTab('table')}
            >
              <TableCellsIcon className="w-5 h-5 mr-2" />
              Table View
            </Tab>
          </TabList>
          
          <TabPanels>
            <TabPanel active={activeTab === 'cards'}>
              <CardView />
            </TabPanel>
            <TabPanel active={activeTab === 'table'}>
              <TableView />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </>
  )
}
