import React from "react";
import { ArrowPathIcon, ShieldCheckIcon, PresentationChartBarIcon, NewspaperIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Higiene y seguridad',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Medio Ambiente',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Tramites municipales',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: NewspaperIcon,
  },
  {
    name: 'Informes Técnicos',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: PresentationChartBarIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-200 py-24 sm:py-32" id="servicios">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-950">Trabaja seguro</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Servicios externos adaptables
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Con nuestra asesoria, tené acceso confiable y seguro a una lista de servicios necesarios para determinar una proyección sustentable a su negocio.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-950">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>          
        </div>
      </div>
    </div>
  )
}
