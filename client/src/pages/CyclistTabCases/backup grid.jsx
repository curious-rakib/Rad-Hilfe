<Grid
  borderLeft='7px solid black'
  h='120px'
  templateRows='repeat(3, 1fr)'
  templateColumns='repeat(5, 1fr)'
  grid-row-gap={7}
>
  {/* <GridItem rowSpan={2} colSpan={1} bg='tomato' >
                                <Box height="100px" borderLeft="5px solid" borderColor={'secondary'} />
                            </GridItem> */}
  <GridItem colSpan={2} bg='papayawhip'>
    <Box paddingLeft={2}>
      <Text fontWeight={'bold'} fontSize='xl'>
        Case #2562{' '}
      </Text>
      <p style={{ marginTop: '-5px' }}>
        <span>Time to replace..</span>
      </p>
    </Box>
  </GridItem>
  <GridItem colSpan={2} bg='papayawhip' right={0}>
    <Box>
      <Text>
        23 Aug 2022
        <br /> Passive check
      </Text>
    </Box>
  </GridItem>
  <GridItem colSpan={4} bg='tomato'>
    <Box width='100%' borderBottom='1px solid black' />
    <Box></Box>
  </GridItem>
</Grid>;
