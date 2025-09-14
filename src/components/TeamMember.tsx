import { Linkedin, Twitter, Mail } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface TeamMemberProps {
  name: string
  position: string
  bio: string
  image: string
  initials: string
  linkedin?: string
  twitter?: string
  email?: string
}

const TeamMember = ({ 
  name, 
  position, 
  bio, 
  image, 
  initials,
  linkedin, 
  twitter, 
  email 
}: TeamMemberProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <Avatar className="h-48 w-full rounded-none">
          <AvatarImage 
            src={image} 
            alt={name}
            className="object-cover w-full h-full"
            onError={(e) => {
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${initials}&background=4F8EF7&color=fff&size=400`;
            }}
          />
          <AvatarFallback className="text-3xl bg-primary text-primary-foreground rounded-none h-full">
            {initials}
          </AvatarFallback>
        </Avatar>
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-primary font-medium mb-3">{position}</p>
        <p className="text-foreground/80 text-sm mb-4 line-clamp-3">{bio}</p>
        
        <div className="flex space-x-3">
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label={`${name}'s Twitter profile`}
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {email && (
            <a 
              href={`mailto:${email}`}
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label={`Email ${name}`}
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default TeamMember