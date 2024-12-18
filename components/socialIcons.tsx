'use client'

import { Facebook, Mail, Linkedin, MessageCircle, Share2 } from 'lucide-react'
import MagicButton from './MagicButton'

export default function SocialShare() {
    const shareCount = "5.9k"

    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
            {/* <div className="text-sm font-medium text-muted-foreground mb-2">
                {shareCount}
                <div className="text-xs">Shares</div>

            </div>

            <div className="flex flex-col gap-px">
                <MagicButton
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 bg-[#3b5998] hover:bg-[#3b5998]/90 text-white"
                    onClick={() => window.open('https://facebook.com/share')}
                >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Share on Facebook</span>
                </MagicButton>

                <MagicButton
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 bg-black hover:bg-black/90 text-white"
                    onClick={() => window.open('https://twitter.com/intent/tweet')}
                >
                    <span className="font-bold text-lg">𝕏</span>
                    <span className="sr-only">Share on X</span>
                </MagicButton>

                <MagicButton
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 bg-gray-500 hover:bg-gray-500/90 text-white"
                    onClick={() => window.location.href = 'mailto:?subject=Check this out'}
                >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Share via Email</span>
                </MagicButton>

                <MagicButton
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 bg-[#0077b5] hover:bg-[#0077b5]/90 text-white"
                    onClick={() => window.open('https://linkedin.com/share')}
                >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">Share on LinkedIn</span>
                </MagicButton>

                <MagicButton
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 bg-[#0084ff] hover:bg-[#0084ff]/90 text-white"
                    onClick={() => window.open('https://www.messenger.com')}
                >
                    <MessageCircle className="h-5 w-5" />
                    <span className="sr-only">Share on Messenger</span>
                </MagicButton>

                <MagicButton
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 bg-[#E60023] hover:bg-[#E60023]/90 text-white"
                    onClick={() => window.open('https://pinterest.com/pin/create/button')}
                >
                    <span className="font-bold">P</span>
                    <span className="sr-only">Share on Pinterest</span>
                </MagicButton>

                <MagicButton
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 bg-[#FF4500] hover:bg-[#FF4500]/90 text-white"
                    onClick={() => window.open('https://reddit.com/submit')}
                >
                    <span className="font-bold">R</span>
                    <span className="sr-only">Share on Reddit</span>
                </MagicButton>

                <MagicButton
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                    onClick={() => window.open('https://wa.me')}
                >
                    <span className="font-bold">W</span>
                    <span className="sr-only">Share on WhatsApp</span>
                </MagicButton>

                <MagicButton
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                >
                    <Share2 className="h-5 w-5" />
                    <span className="sr-only">Share</span>
                </MagicButton>
            </div> */}
        </div>
    )
}

