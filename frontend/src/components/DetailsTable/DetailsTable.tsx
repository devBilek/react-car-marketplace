import { Table, Title, Text } from "@mantine/core";

interface DetailsTableProps {
    title: string;
    data: Array<{
        label: string;
        value: string | number | null | undefined;
    }>;
    emptyValue?: string;
}

export const DetailsTable = ({title, data, emptyValue = ''}: DetailsTableProps) => {
    return (
        <Table verticalSpacing="md" horizontalSpacing="lg" mb="xl">
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>
                        <Title order={4}>{title}</Title>
                    </Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                {data.map((item, index) => (
                    <Table.Tr key={index}>
                        <Table.Td>
                            <Text size="md">{item.label}</Text>
                        </Table.Td>
                        <Table.Td>
                            <Text size="md">
                                {item.value !== null && item.value !== undefined
                                    ? item.value
                                    : emptyValue}
                            </Text>
                        </Table.Td>
                    </Table.Tr>
                ))}
            </Table.Tbody>
        </Table>
    );
};