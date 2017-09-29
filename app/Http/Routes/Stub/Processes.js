/* 
 * This file has the routes used for testing without database or AAA
 */
// Method names according to the Google Cloud API Naming Conventions https://cloud.google.com/apis/design/naming_convention
const Route = use('Route')
// PROCESSES COLLECTION MANAGEMENT:
// MetadataList: get a list of processes' metadata 
Route.get('/stub/processes/metadata', 'Stub/ProcessesStubController.MetadataList')
// MetadataItem: get a list of a process' metadata
Route.get('/stub/processes/metadata/:id', 'Stub/ProcessesStubController.MetadataItem')
// GetList: get a list of processes
Route.get('/stub/processes', 'Stub/ProcessesStubController.GetList')
// GetItem: get a process
Route.get('/stub/processes/:id', 'Stub/ProcessesStubController.GetItem')
// CreateItem: create a process
Route.post('/stub/processes', 'Stub/ProcessesStubController.CreateItem')
// DeleteItem: Deletes a process
Route.delete('/stub/processes/:id', 'Stub/ProcessesStubController.DeleteItem')
// EmptyCollection: Deletes all processes in a collection for which the user is admin
Route.delete('/stub/processes', 'Stub/ProcessesStubController.EmptyCollection')
