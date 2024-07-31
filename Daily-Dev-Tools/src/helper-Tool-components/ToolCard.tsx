import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface Props {
    name: string;
    path: string;
    description: string;
}

const ToolCard = ({ name, path, description }: Props) => {
    return (
        <Link to={path}>
            <Card className="rounded-sm raleway-proza max-w-96 overflow-hidden" backgroundColor={"#111827"} borderWidth={"2px"} borderColor={"#fafafa"}>
                <CardHeader>
                    <Heading size='md'>{name}</Heading>
                </CardHeader>
                <CardBody >
                    <Text>{description}</Text>
                </CardBody>
            </Card>
        </Link >
    )
}

export default ToolCard