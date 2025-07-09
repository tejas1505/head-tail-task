import { Box, Button, createListCollection, Flex, Portal, Select, Text } from '@chakra-ui/react';
import { useState } from 'react';

const HeadTail = () => {
    const [selected, setSelected] = useState([]);
    const [error, setError] = useState('');
    const [columns, setColumns] = useState([]);

    const sides = createListCollection({
        items: [
            { label: "H", value: "H" },
            { label: "T", value: "T" },
        ],
    })

    const handleSubmit = () => {
        if (selected[0] !== 'H' && selected[0] !== 'T') {
            setError('Please select value from dropdown.');
            return;
        }

        setError('');

        let newColumns = [...columns];

        if (newColumns.length === 0 || newColumns[newColumns.length - 1][0] !== selected[0]) {
            newColumns.push([selected[0]]);
        } else {
            newColumns[newColumns.length - 1].push(selected[0]);
        }

        setColumns(newColumns);
        setSelected([]);
    };

    return (
        <Box>

            <Text textAlign='center' fontSize='20px' fontWeight='500'>Head & Tail Page</Text>
            <Flex flexDir='column' gap={4} w='320px' mx='auto' mt={4}> 
                <Select.Root collection={sides} size="sm" width="320px" value={selected} onValueChange={(e) => setSelected(e.value)} invalid={error && '1px solid red'}>
                <Select.HiddenSelect />
                <Select.Label fontWeight='500'>Select Value</Select.Label>
                <Select.Control>
                    <Select.Trigger>
                        <Select.ValueText placeholder="Select Value" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                        <Select.Indicator />
                    </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                    <Select.Positioner>
                        <Select.Content>
                            {sides.items.map((side) => (
                                <Select.Item item={side} key={side.value}>
                                    {side.label}
                                    <Select.ItemIndicator />
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Positioner>
                </Portal>
            </Select.Root>
            {error && <Text color='red' fontSize={'14px'}>{error}</Text>}

            <Button onClick={handleSubmit}>Submit</Button>
            </Flex>


            {columns.length > 0 && <Flex mt={'20px'} justifyContent='center'>
                {columns.map((col, colIndex) => (
                    <Box key={colIndex} mr='20px' style={{ marginRight: '20px' }}>
                        {col.map((val, rowIndex) => (
                            <Text key={rowIndex}>{val}</Text>
                        ))}
                    </Box>
                ))}
            </Flex>}
        </Box>
    );
};

export default HeadTail;
