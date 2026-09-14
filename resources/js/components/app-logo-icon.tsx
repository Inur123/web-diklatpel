import type { ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export default function AppLogoIcon({
    className,
    alt = 'Logo DIKLATPEL CBP IPNU KPP IPPNU Magetan',
    ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            src="/images/logo-diklatpel.webp"
            alt={alt}
            className={cn('object-contain', className)}
            {...props}
        />
    );
}
