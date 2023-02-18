import { FC } from 'react';
import { Box, Divider, Heading, StackProps, VStack } from '@chakra-ui/react';
import RelayJobItem from './RelayJobItem';
import { useRelayers } from 'contexts/relayJobs';

interface IRelayJobsListProps extends StackProps {}

const RelayJobsList: FC<IRelayJobsListProps> = ({ ...props }) => {
  const { removeJob, jobs } = useRelayers();

  return (
    <Box p={4} {...props}>
      <Heading fontSize="2xl" color="brand.500" py={2}>
        Relay Jobs
      </Heading>
      <VStack alignItems="stretch" overflowY="scroll" maxH="80vh">
        {jobs.length === 0 && (
          <Box textAlign="center" py={16}>
            No Jobs Yet!
          </Box>
        )}

        {jobs.map((job: any) => (
          <Box key={job.id} px={2}>
            <RelayJobItem job={job} onRemove={removeJob} />
            <Divider />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default RelayJobsList;