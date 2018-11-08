import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'bloomer/lib/components/Card/Card';
import { CardContent } from 'bloomer/lib/components/Card/CardContent';
import { Title } from 'bloomer/lib/elements/Title';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import { CardFooter } from 'bloomer/lib/components/Card/Footer/CardFooter';
import { CardFooterItem } from 'bloomer/lib/components/Card/Footer/CardFooterItem';

    const User = ({user}) => {
        const name = user.name;
        const type = user.type;
        const path = `/users/${user.id}`


    return (
        
    <Card style= {{margin: 8}}>
        <CardContent>
            <Title>
                {name}
            </Title>
            <Subtitle>
                {type}
            </Subtitle>
  
            <CardFooter>
              <CardFooterItem>
      
                  < Link to = {
                      {
                        pathname: path,
                        state: { 
                        user: {user}
                        }
                      }
                  }> Sign In </Link>
      
               </CardFooterItem>
             </CardFooter>
         </CardContent>
     </Card>
    )
}

export default User;