<section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">

                <div class="card">
                    <div class="card-body p-5">

                        <form class="d-flex justify-content-center align-items-center mb-4">
                            <div class="form-outline flex-fill">
                                <input type="text" id="form2" class="form-control" />
                                <label class="form-label" for="form2">New task...</label>
                            </div>
                            <button type="submit" class="btn btn-info ms-2">Add</button>
                        </form>


                        <ul class="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="ex1-tab-1" data-mdb-toggle="tab" href="#ex1-tabs-1" role="tab"
                                    aria-controls="ex1-tabs-1" aria-selected="true">All</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="ex1-tab-2" data-mdb-toggle="tab" href="#ex1-tabs-2" role="tab"
                                    aria-controls="ex1-tabs-2" aria-selected="false">Active</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="ex1-tab-3" data-mdb-toggle="tab" href="#ex1-tabs-3" role="tab"
                                    aria-controls="ex1-tabs-3" aria-selected="false">Completed</a>
                            </li>
                        </ul>


                        <div class="tab-content" id="ex1-content">
                            <div class="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel"
                                aria-labelledby="ex1-tab-1">
                                <ul class="list-group mb-0">
                                    <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                        style={{ backgroundColor: 'f4f6f7' }}>
                                        <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                                        <s>Cras justo odio</s>
                                    </li>
                                    <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"

                                        style={{ backgroundColor: 'f4f6f7' }}>
                                        <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                                        <s>Dapibus ac facilisis in</s>
                                    </li>
                                    <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"

                                        style={{ backgroundColor: 'f4f6f7' }}
                                    >
                                        <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                        Morbi leo risus
                                    </li>
                                    <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                        style={{ backgroundColor: 'f4f6f7' }}>
                                        <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                        Porta ac consectetur ac
                                    </li>
                                    <li class="list-group-item d-flex align-items-center border-0 mb-0 rounded"
                                        style={{ backgroundColor: 'f4f6f7' }}>
                                        <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                        Vestibulum at eros
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                                <ul class="list-group mb-0">
                                    <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                        style={{ backgroundColor: 'f4f6f7' }}>
                                        <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                        Morbi leo risus
                                    </li>
                                    <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                        style={{ backgroundColor: 'f4f6f7' }}>
                                        <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                        Porta ac consectetur ac
                                    </li>
                                    <li class="list-group-item d-flex align-items-center border-0 mb-0 rounded"
                                        style={{ backgroundColor: 'f4f6f7' }}>
                                        <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                        Vestibulum at eros
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                                <ul class="list-group mb-0">
                                    <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                        style={{ backgroundColor: 'f4f6f7' }}>
                                        <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                                        <s>Cras justo odio</s>
                                    </li>
                                    <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                        style={{ backgroundColor: 'f4f6f7' }}>
                                        <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                                        <s>Dapibus ac facilisis in</s>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

    // <section class="vh-100" style={{ backgroundColor: "eee " }} >
    //             <div class="container py-5 h-100">
    //                 <div class="row d-flex justify-content-center align-items-center h-100">
    //                     <div class="col-md-12 col-xl-10">

    //                         <div class="card">
    //                             <div class="card-header p-3">
    //                                 <h5 class="mb-0"><i class="fas fa-tasks me-2"></i>Task List</h5>
    //                             </div>
    //                             <div class="card-body" data-mdb-perfect-scrollbar="true" style={{ position: "relative", height: 400 }} />

    //                             <table class="table mb-0">
    //                                 <thead>
    //                                     <tr>
    //                                         <th scope="col">Team Member</th>
    //                                         <th scope="col">Task</th>
    //                                         <th scope="col">Priority</th>
    //                                         <th scope="col">Actions</th>
    //                                     </tr>
    //                                 </thead>
    //                                 <tbody>
    //                                     <tr class="fw-normal">
    //                                         <th>
    //                                             <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
    //                                                 class="shadow-1-strong rounded-circle" alt="avatar 1"
    //                                                 style={{ width: 55, height: "auto" }} />
    //                                             <span class="ms-2">Alice Mayer</span>
    //                                         </th>
    //                                         <td class="align-middle">
    //                                             <span>Call Sam For payments</span>
    //                                         </td>
    //                                         <td class="align-middle">
    //                                             <h6 class="mb-0"><span class="badge bg-danger">High priority</span></h6>
    //                                         </td>
    //                                         <td class="align-middle">
    //                                             <a href="#!" data-mdb-toggle="tooltip" title="Done"><i
    //                                                 class="fas fa-check text-success me-3"></i></a>
    //                                             <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i
    //                                                 class="fas fa-trash-alt text-danger"></i></a>
    //                                         </td>
    //                                     </tr>
    //                                     <tr class="fw-normal">
    //                                         <th>
    //                                             <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
    //                                                 class="shadow-1-strong rounded-circle" alt="avatar 1"
    //                                                 style={{ width: 55, height: "auto" }} />
    //                                             <span class="ms-2">Kate Moss</span>
    //                                         </th>
    //                                         <td class="align-middle">Make payment to Bluedart</td>
    //                                         <td class="align-middle">
    //                                             <h6 class="mb-0"><span class="badge bg-success">Low priority</span></h6>
    //                                         </td>
    //                                         <td class="align-middle">
    //                                             <a href="#!" data-mdb-toggle="tooltip" title="Done"><i
    //                                                 class="fas fa-check text-success me-3"></i></a>
    //                                             <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i
    //                                                 class="fas fa-trash-alt text-danger"></i></a>
    //                                         </td>
    //                                     </tr>
    //                                     <tr class="fw-normal">
    //                                         <th>
    //                                             <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
    //                                                 class="shadow-1-strong rounded-circle" alt="avatar 1"
    //                                                 style={{ width: 55, height: "auto" }} />
    //                                             <span class="ms-2">Danny McChain</span>
    //                                         </th>
    //                                         <td class="align-middle">Office rent</td>
    //                                         <td class="align-middle">
    //                                             <h6 class="mb-0"><span class="badge bg-warning">Middle priority</span></h6>
    //                                         </td>
    //                                         <td class="align-middle">
    //                                             <a href="#!" data-mdb-toggle="tooltip" title="Done"><i
    //                                                 class="fas fa-check text-success me-3"></i></a>
    //                                             <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i
    //                                                 class="fas fa-trash-alt text-danger"></i></a>
    //                                         </td>
    //                                     </tr>
    //                                     <tr class="fw-normal">
    //                                         <th>
    //                                             <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
    //                                                 class="shadow-1-strong rounded-circle" alt="avatar 1"
    //                                                 style={{ width: 55, height: "auto " }} />
    //                                             <span class="ms-2">Alexa Chung</span>
    //                                         </th>
    //                                         <td class="align-middle">Office grocery shopping</td>
    //                                         <td class="align-middle">
    //                                             <h6 class="mb-0"><span class="badge bg-danger">High priority</span></h6>
    //                                         </td>
    //                                         <td class="align-middle">
    //                                             <a href="#!" data-mdb-toggle="tooltip" title="Done"><i
    //                                                 class="fas fa-check text-success me-3"></i></a>
    //                                             <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i
    //                                                 class="fas fa-trash-alt text-danger"></i></a>
    //                                         </td>
    //                                     </tr>
    //                                     <tr class="fw-normal">
    //                                         <th class="">
    //                                             <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
    //                                                 class="shadow-1-strong rounded-circle" alt="avatar 1"
    //                                                 style={{ width: 55, height: "auto" }} />
    //                                             <span class="ms-2">Ben Smith</span>
    //                                         </th>
    //                                         <td class="align-middle">Ask for Lunch to Clients</td>
    //                                         <td class="align-middle">
    //                                             <h6 class="mb-0"><span class="badge bg-success">Low priority</span></h6>
    //                                         </td>
    //                                         <td class="align-middle">
    //                                             <a href="#!" data-mdb-toggle="tooltip" title="Done"><i
    //                                                 class="fas fa-check text-success me-3"></i></a>
    //                                             <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i
    //                                                 class="fas fa-trash-alt text-danger"></i></a>
    //                                         </td>
    //                                     </tr>
    //                                     <tr class="fw-normal">
    //                                         <th class="border-0">
    //                                             <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
    //                                                 class="shadow-1-strong rounded-circle" alt="avatar 1"

    //                                                 style={{ width: 55, height: "auto" }} />
    //                                             <span class="ms-2">Annie Hall</span>
    //                                         </th>
    //                                         <td class="border-0 align-middle">Create weekly tasks plan</td>
    //                                         <td class="border-0 align-middle">
    //                                             <h6 class="mb-0"><span class="badge bg-warning">Medium priority</span></h6>
    //                                         </td>
    //                                         <td class="border-0 align-middle">
    //                                             <a href="#!" data-mdb-toggle="tooltip" title="Done"><i
    //                                                 class="fas fa-check text-success me-3"></i></a>
    //                                             <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i
    //                                                 class="fas fa-trash-alt text-warning"></i></a>
    //                                         </td>
    //                                     </tr>
    //                                 </tbody>
    //                             </table>

    //                         </div>
    //                         <div class="card-footer text-end p-3">
    //                             <button class="me-2 btn btn-link">Cancel</button>
    //                             <button class="btn btn-primary">Add Task</button>
    //                         </div>
    //                     </div>

    //                 </div>
    //             </div>
    //         </section> 





//     <div class="task-manager">
//     <div class="page-content">
//         <div class="header">Today Tasks</div>
//         <div class="content-categories">
//             <div class="label-wrapper">
//                 <input class="nav-item" name="nav" type="radio" id="opt-1" />
//                 <label class="category" for="opt-1">All</label>
//             </div>
//             <div class="label-wrapper">
//                 <input class="nav-item" name="nav" type="radio" id="opt-2" checked />
//                 <label class="category" for="opt-2">Important</label>
//             </div>
//             <div class="label-wrapper">
//                 <input class="nav-item" name="nav" type="radio" id="opt-3" />
//                 <label class="category" for="opt-3">Notes</label>
//             </div>
//             <div class="label-wrapper">
//                 <input class="nav-item" name="nav" type="radio" id="opt-4" />
//                 <label class="category" for="opt-4">Links</label>
//             </div>
//         </div>
//         <div class="tasks-wrapper">
//             <div class="task">
//                 <input class="task-item" name="task" type="checkbox" id="item-1" checked />
//                 <label for="item-1">
//                     <span class="label-text">Dashboard Design Implementation</span>
//                 </label>
//                 <span class="tag approved">Approved</span>
//             </div>
//             <div class="task">
//                 <input class="task-item" name="task" type="checkbox" id="item-2" checked />
//                 <label for="item-2">
//                     <span class="label-text">Create a userflow</span>
//                 </label>
//                 <span class="tag progress">In Progress</span>
//             </div>
//             <div class="task">
//                 <input class="task-item" name="task" type="checkbox" id="item-3" />
//                 <label for="item-3">
//                     <span class="label-text">Application Implementation</span>
//                 </label>
//                 <span class="tag review">In Review</span>
//             </div>
//             <div class="task">
//                 <input class="task-item" name="task" type="checkbox" id="item-4" />
//                 <label for="item-4">
//                     <span class="label-text">Create a Dashboard Design</span>
//                 </label>
//                 <span class="tag progress">In Progress</span>
//             </div>
//             <div class="task">
//                 <input class="task-item" name="task" type="checkbox" id="item-5" />
//                 <label for="item-5">
//                     <span class="label-text">Create a Web Application Design</span>
//                 </label>
//                 <span class="tag approved">Approved</span>
//             </div>
//             <div class="task">
//                 <input class="task-item" name="task" type="checkbox" id="item-6" />
//                 <label for="item-6">
//                     <span class="label-text">Interactive Design</span>
//                 </label>
//                 <span class="tag review">In Review</span>
//             </div>
//             <div class="header upcoming">Upcoming Tasks</div>
//             <div class="task">
//                 <input class="task-item" name="task" type="checkbox" id="item-7" />
//                 <label for="item-7">
//                     <span class="label-text">Dashboard Design Implementation</span>
//                 </label>
//                 <span class="tag waiting">Waiting</span>
//             </div>
//             <div class="task">
//                 <input class="task-item" name="task" type="checkbox" id="item-8" />
//                 <label for="item-8">
//                     <span class="label-text">Create a userflow</span>
//                 </label>
//                 <span class="tag waiting">Waiting</span>
//             </div>
//             <div class="task">
//                 <input class="task-item" name="task" type="checkbox" id="item-9" />
//                 <label for="item-9">
//                     <span class="label-text">Application Implementation</span>
//                 </label>
//                 <span class="tag waiting">Waiting</span>
//             </div>
//             <div class="task">
//                 <input class="task-item" name="task" type="checkbox" id="item-10" />
//                 <label for="item-10">
//                     <span class="label-text">Create a Dashboard Design</span>
//                 </label>
//                 <span class="tag waiting">Waiting</span>
//             </div>
//         </div>
//     </div>
//     <div class="right-bar">
//         <div class="top-part">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users">
//                 <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//                 <circle cx="9" cy="7" r="4" />
//                 <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//                 <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//             </svg>
//             <div class="count">6</div>
//         </div>
//         <div class="header">Schedule</div>
//         <div class="right-content">
//             <div class="task-box yellow">
//                 <div class="description-task">
//                     <div class="time">08:00 - 09:00 AM</div>
//                     <div class="task-name">Product Review</div>
//                 </div>
//                 <div class="more-button"></div>
//                 <div class="members">
//                     <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="member" />
//                     <img src="https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&auto=format&fit=crop&w=2210&q=80" alt="member-2" />
//                     <img src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="member-3" />
//                     <img src="https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" alt="member-4" />
//                 </div>
//             </div>
//             <div class="task-box blue">
//                 <div class="description-task">
//                     <div class="time">10:00 - 11:00 AM</div>
//                     <div class="task-name">Design Meeting</div>
//                 </div>
//                 <div class="more-button"></div>
//                 <div class="members">
//                     <img src="https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixlib=rb-1.2.1&auto=format&fit=crop&w=2230&q=80" alt="member" />
//                     <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="member-2" />
//                     <img src="https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" alt="member-3" />
//                 </div>
//             </div>
//             <div class="task-box red">
//                 <div class="description-task">
//                     <div class="time">01:00 - 02:00 PM</div>
//                     <div class="task-name">Team Meeting</div>
//                 </div>
//                 <div class="more-button"></div>
//                 <div class="members">
//                     <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="member" />
//                     <img src="https://images.unsplash.com/photo-1475552113915-6fcb52652ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80" alt="member-2" />
//                     <img src="https://images.unsplash.com/photo-1493752603190-08d8b5d1781d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80" alt="member-3" />
//                     <img src="https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixlib=rb-1.2.1&auto=format&fit=crop&w=2230&q=80" alt="member-4" />
//                 </div>
//             </div>
//             <div class="task-box green">
//                 <div class="description-task">
//                     <div class="time">03:00 - 04:00 PM</div>
//                     <div class="task-name">Release Event</div>
//                 </div>
//                 <div class="more-button"></div>
//                 <div class="members">
//                     <img src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80" alt="member" />
//                     <img src="https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=80" alt="member-2" />
//                     <img src="https://images.unsplash.com/photo-1521122872341-065792fb2fa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2208&q=80" alt="member-3" />
//                     <img src="https://images.unsplash.com/photo-1486302913014-862923f5fd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=3400&q=80" alt="member-4" />
//                     <img src="https://images.unsplash.com/photo-1484187216010-59798e9cc726?ixlib=rb-1.2.1&auto=format&fit=crop&w=955&q=80" alt="member-5" />
//                 </div>
//             </div>
//             <div class="task-box blue">
//                 <div class="description-task">
//                     <div class="time">08:00 - 09:00 PM</div>
//                     <div class="task-name">Release Event</div>
//                 </div>
//                 <div class="more-button"></div>
//                 <div class="members">
//                     <img src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80" alt="member" />
//                     <img src="https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=80" alt="member-2" />
//                     <img src="https://images.unsplash.com/photo-1521122872341-065792fb2fa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2208&q=80" alt="member-3" />
//                     <img src="https://images.unsplash.com/photo-1486302913014-862923f5fd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=3400&q=80" alt="member-4" />
//                     <img src="https://images.unsplash.com/photo-1484187216010-59798e9cc726?ixlib=rb-1.2.1&auto=format&fit=crop&w=955&q=80" alt="member-5" />
//                 </div>
//             </div>
//             <div class="task-box yellow">
//                 <div class="description-task">
//                     <div class="time">11:00 - 12:00 PM</div>
//                     <div class="task-name">Practise</div>
//                 </div>
//                 <div class="more-button"></div>
//                 <div class="members">
//                     <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="member" />
//                     <img src="https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&auto=format&fit=crop&w=2210&q=80" alt="member-2" />
//                     <img src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="member-3" />
//                     <img src="https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" alt="member-4" />
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// * {
//     box-sizing: border-box;
//     outline: none;
//   }
  
//   :root {
//     --bg-color: #f5f8ff;
//     --main-color: #353536;
//     --secondary-color: #8e92a4;
//     --main-text-color: #5d606b;
//     --secondary-dark-color: #9496a5;
//     --tag-color-one: #e0fbf6;
//     --tag-color-text-one: #58c2a9;
//     --tag-color-two: #ece7fe;
//     --tag-color-text-two: #8972f3;
//     --tag-color-three: #fde7ea;
//     --tag-color-text-three: #e77f89;
//     --tag-color-four: #f7f8fc;
//     --tag-color-text-four: #a0a6b5;
//     --checkbox-color: #009e90;
//     --button-color: #49beb7;
//     --box-color: #fff1d6;
//     --box-color-2: #d3e6ff;
//     --box-color-3: #ffd9d9;
//     --box-color-4: #daffe5;
//     --task-color: #777982;
//   }
  
//   /* %flex {
//     display: flex;
//     align-items: center;
//   } */
  
//   body {
//     margin: 0;
//     @extend %flex;
//     justify-content: center;
//     flex-direction: column;
//     overflow: auto;
//     width: 100%;
//     height: 100vh;
//     padding: 20px;
//     font-family: "DM Sans", sans-serif;
//     font-size: 12px;
//     background-image: linear-gradient(
//         21deg,
//         rgba(64, 83, 206, 0.3697003234675773) 68%,
//         rgba(255, 206, 196, 0.5) 163%
//       ),
//       linear-gradient(
//         163deg,
//         rgba(49, 146, 170, 0.07944489965716128) 86%,
//         rgba(239, 112, 138, 0.5) 40%
//       ),
//       linear-gradient(
//         30deg,
//         rgba(76, 79, 173, 0.6173675716587805) 22%,
//         rgba(237, 106, 134, 0.5) 169%
//       ),
//       linear-gradient(
//         48deg,
//         rgba(31, 85, 147, 0.7323890641868473) 64%,
//         rgba(247, 126, 132, 0.5) 43%
//       );
//     background-blend-mode: overlay, multiply, color, normal;
//   }
  
//   ul {
//     list-style-type: none;
//     padding: 0;
//   }
  
//   button {
//     border: none;
//     background: none;
//     cursor: pointer;
//   }
  
//   .task-manager {
//     display: flex;
//     justify-content: space-between;
//     width: 100%;
//     max-width: 1200px;
//     height: 90vh;
//     max-height: 900px;
//     background: #fff;
//     border-radius: 4px;
//     box-shadow: 0 0.3px 2.2px rgba(0, 0, 0, 0.011),
//       0 0.7px 5.3px rgba(0, 0, 0, 0.016), 0 1.3px 10px rgba(0, 0, 0, 0.02),
//       0 2.2px 17.9px rgba(0, 0, 0, 0.024), 0 4.2px 33.4px rgba(0, 0, 0, 0.029),
//       0 10px 80px rgba(0, 0, 0, 0.04);
//     overflow: hidden;
//   }
  
//   .left-bar {
//     background-color: var(--bg-color);
//     width: 230px;
//     border-right: 1px solid #e3e7f7;
//     position: relative;
//   }
  
//   .left-content {
//     padding: 40px;
//   }
//   .flex {
//     display: flex;
//   }
  
//   .item {
//     display: flex;
//     color: var(--main-color);
//     margin-bottom: 14px;
//     font-weight: 500;
//   }
  
//   .item .svg {
//     width: 14px;
//     height: 14px;
//     color: currentcolor;
//     margin-right: 10px;
//   }
  
//   /* .item {
//     @extend %flex;
//     color: var(--main-color);
//     margin-bottom: 14px;
//     font-weight: 500;
  
//     .svg {
//       width: 14px;
//       height: 14px;
//       color: currentcolor;
//       margin-right: 10px;
//     }
//   } */
  
//   .category-list {
//     margin-top: 50px;
  
//     .item {
//       color: var(--secondary-color);
//     }
//   }
  
//   .actions {
//     padding: 12px;
//     display: flex;
//     justify-content: space-between;
//   }
  
//   .circle {
//     border-radius: 50%;
//     width: 10px;
//     height: 10px;
//     background-color: #fe4d46;
//     box-shadow: 14px 0 0 0 #fbc023, 28px 0 0 0 #7dd21f;
//   }
  
//   .circle-2 {
//     border-radius: 50%;
//     width: 4px;
//     height: 4px;
//     background-color: #d5d7e3;
//     box-shadow: -6px 0 0 0 #d5d7e3, 6px 0 0 0 #d5d7e3;
//   }
  
//   .right-bar {
//     width: 320px;
//     border-left: 1px solid #e3e7f7;
//     display: flex;
//     flex-direction: column;
  
//     .header {
//       font-size: 20px;
//       color: var(--main-text-color);
//       margin-left: 30px;
//     }
//   }
  
//   .top-part {
//     padding: 30px;
//     /* @extend %flex; */
//     align-self: flex-end;
  
//     .svg {
//       width: 14px;
//       height: 14px;
//       color: var(--main-color);
//       margin-right: 14px;
//     }
  
//     .count {
//       font-size: 12px;
//       border-radius: 50%;
//       width: 24px;
//       height: 24px;
//       background-color: #623ce8;
//       color: #fff;
//       @extend %flex;
//       justify-content: center;
//     }
//   }
  
//   .right-content {
//     padding: 10px 40px;
//     overflow-y: auto;
//     flex: 1;
//   }
  
//   .task-box {
//     position: relative;
//     border-radius: 12px;
//     width: 100%;
//     margin: 20px 0;
//     padding: 16px;
//     cursor: pointer;
//     box-shadow: 2px 2px 4px 0px rgba(235, 235, 235, 1);
  
//     &:hover {
//       transform: scale(1.02);
//     }
//   }
  
//   .time {
//     margin-bottom: 6px;
//     opacity: 0.4;
//     font-size: 10px;
//   }
  
//   .task-name {
//     font-size: 14px;
//     font-weight: 500;
//     opacity: 0.6;
//   }
  
//   .yellow {
//     background-color: var(--box-color);
//   }
  
//   .blue {
//     background-color: var(--box-color-2);
//   }
  
//   .red {
//     background-color: var(--box-color-3);
//   }
  
//   .green {
//     background-color: var(--box-color-4);
//   }
  
//   .more-button {
//     position: absolute;
//     width: 3px;
//     height: 3px;
//     border-radius: 50%;
//     background-color: #8e92a4;
//     box-shadow: 0 -4px 0 0 #8e92a4, 0 4px 0 0 #8e92a4;
//     opacity: 0.4;
//     right: 20px;
//     top: 30px;
//     cursor: pointer;
//   }
  
//   .right-content {
//     .task-box {
//       .members {
//         .img {
//           /* SCSS styles for img elements */
//           /* Example: */
//           border-radius: "50px";
//           width: 30px;
//           height: 30px;
//           margin-right: 4px;
//           object-fit: cover;
//         }
//       }
//     }
//   }
  
  
  
//   .page-content {
//     display: flex;
//     flex-direction: column;
//     flex: 1;
//     padding: 40px 20px 0 20px;
  
//     .header {
//       font-size: 26px;
//       color: var(--main-color);
//       margin-top: 30px;
//     }
//   }
  
//   .content-categories {
//     display: flex;
//     justify-content: space-evenly;
//     width: 100%;
//     border-bottom: 1px solid #ddd;
//     padding: 20px 0;
//   }
  
//   .nav-item {
//     display: none;
//   }
  
//   .category {
//     font-weight: 500;
//     color: var(--secondary-color);
//     border-bottom: 1px solid #ddd;
//     transition: 0.4s ease-in;
//     padding: 20px 30px;
//     cursor: pointer;
//   }
  
//   #opt-1:checked + label,
//   #opt-2:checked + label,
//   #opt-3:checked + label,
//   #opt-4:checked + label {
//     color: var(--checkbox-color);
//     border-bottom: 2px solid var(--checkbox-color);
//   }
  
//   .task-item {
//     display: none;
//   }
  
//   .tasks-wrapper {
//     padding: 30px 0;
//     flex: 1;
//     overflow-y: auto;
//     height: 100%;
//     padding-right: 8px;
//   }
  
//   .task {
//     display: flex;
//     justify-content: space-between;
//     position: relative;
//     margin-bottom: 16px;
//     padding-left: 30px;
//     color: var(--task-color);
//     font-size: 13px;
//     font-weight: 500;
  
//     &:hover {
//       transform: translatex(2px);
//     }
  
//     /* label {
//       cursor: pointer;
//     } */
//   }
  
//   label .label-text {
//     position: relative;
//   }
  
//   label .label-text:before {
//     content: "";
//     position: absolute;
//     width: 14px;
//     height: 14px;
//     border: 1px solid #ddd;
//     border-radius: 2px;
//     left: -24px;
//     transition: 0.2s ease;
//   }
  
//   .task-item:checked + label .label-text:before {
//     background-color: var(--checkbox-color);
//     border: none;
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
//     background-repeat: no-repeat;
//     background-size: 10px;
//     background-position: center;
//     border: 1px solid var(--checkbox-color);
//   }
  
//   .tag {
//     font-size: 10px;
//     padding: 4px 8px;
//     border-radius: 20px;
  
//     &.approved {
//       background-color: var(--tag-color-one);
//       color: var(--tag-color-text-one);
//     }
  
//     &.progress {
//       background-color: var(--tag-color-two);
//       color: var(--tag-color-text-two);
//     }
  
//     &.review {
//       background-color: var(--tag-color-three);
//       color: var(--tag-color-text-three);
//     }
  
//     &.waiting {
//       background-color: var(--tag-color-four);
//       color: var(--tag-color-text-four);
//     }
//   }
  
//   .upcoming {
//     border-bottom: 1px solid #ddd;
//     padding-bottom: 30px;
//     margin-bottom: 30px;
//   }
  
//   @media screen and (max-width: 900px) {
//     .left-bar {
//       display: none;
//     }
//   }
  
//   @media screen and (max-width: 700px) {
//     .task-manager {
//       flex-direction: column;
//       overflow-y: auto;
//     }
  
//     .right-bar,
//     .page-content {
//       width: 100%;
//       display: block;
//     }
  
//     .tasks-wrapper {
//       height: auto;
//     }
//   }
  
//   @media screen and (max-width: 520px) {
//     .page-content {
//       padding: 40px 10px 0 10px;
//     }
  
//     .right-content {
//       padding: 10px 16px;
//     }
  
//     .category {
//       padding: 20px;
//     }
//   }
  

















// <div class="container-fluid">
// <div class="row">

//     <main role="main" class="col-md-9 ml-sm-auto col-lg-10 my-3">
//         <div class="card-list">
//             <div class="row">
//                 <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
//                     <div class="card blue">
//                         <div class="title">all projects</div>
//                         <i class="zmdi zmdi-upload"></i>
//                         <div class="value">89</div>
//                         <div class="stat"><b>13</b>% increase</div>
//                     </div>
//                 </div>
//                 <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
//                     <div class="card green">
//                         <div class="title">team members</div>
//                         <i class="zmdi zmdi-upload"></i>
//                         <div class="value">5,990</div>
//                         <div class="stat"><b>4</b>% increase</div>
//                     </div>
//                 </div>
//                 <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
//                     <div class="card orange">
//                         <div class="title">total budget</div>
//                         <i class="zmdi zmdi-download"></i>
//                         <div class="value">$80,990</div>
//                         <div class="stat"><b>13</b>% decrease</div>
//                     </div>
//                 </div>
//                 <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
//                     <div class="card red">
//                         <div class="title">new customers</div>
//                         <i class="zmdi zmdi-download"></i>
//                         <div class="value">3</div>
//                         <div class="stat"><b>13</b>% decrease</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="projects mb-4">
//             <div class="projects-inner">
//                 <header class="projects-header">
//                     <div class="title">Ongoing Projects</div>
//                     <div class="count">| 32 Projects</div>
//                     <i class="zmdi zmdi-download"></i>
//                 </header>
//                 <table class="projects-table">
//                     <thead>
//                         <tr>
//                             <th>Project</th>
//                             <th>Deadline</th>
//                             <th>Leader + Team</th>
//                             <th>Budget</th>
//                             <th>Status</th>
//                             <th class="text-right">Actions</th>
//                         </tr>
//                     </thead>
//                     <tr>
//                         <td>
//                             <p>New Dashboard</p>
//                             <p>Google</p>
//                         </td>
//                         <td>
//                             <p>17th Oct, 15</p>
//                             <p class="text-danger">Overdue</p>
//                         </td>

//                         <td>
//                             <p>$4,670</p>
//                             <p>Paid</p>
//                         </td>
//                         <td class="status">
//                             <span class="status-text status-orange">In progress</span>
//                         </td>
//                         <td>
//                             <form class="form" action="#" method="POST">
//                                 <select class="action-box">
//                                     <option>Actions</option>
//                                     <option>Start project</option>
//                                     <option>Send for QA</option>
//                                     <option>Send invoice</option>
//                                 </select>
//                             </form>
//                         </td>
//                     </tr>
//                     <tr class="danger-item">
//                         <td>
//                             <p>New Dashboard</p>
//                             <p>Google</p>
//                         </td>
//                         <td>
//                             <p>17th Oct, 15</p>
//                             <p class="text-danger">Overdue</p>
//                         </td>

//                         <td>
//                             <p>$4,670</p>
//                             <p>Paid</p>
//                         </td>
//                         <td class="status">
//                             <span class="status-text status-red">Blocked</span>
//                         </td>
//                         <td>
//                             <form class="form" action="#" method="POST">
//                                 <select class="action-box">
//                                     <option>Actions</option>
//                                     <option>Start project</option>
//                                     <option>Send for QA</option>
//                                     <option>Send invoice</option>
//                                 </select>
//                             </form>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <p>New Dashboard</p>
//                             <p>Google</p>
//                         </td>
//                         <td>
//                             <p>17th Oct, 15</p>
//                             <p class="text-danger">Overdue</p>
//                         </td>

//                         <td>
//                             <p>$4,670</p>
//                             <p>Paid</p>
//                         </td>
//                         <td class="status">
//                             <span class="status-text status-orange">In progress</span>
//                         </td>
//                         <td>
//                             <form class="form" action="#" method="POST">
//                                 <select class="action-box">
//                                     <option>Actions</option>
//                                     <option>Start project</option>
//                                     <option>Send for QA</option>
//                                     <option>Send invoice</option>
//                                 </select>
//                             </form>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <p>New Dashboard</p>
//                             <p>Google</p>
//                         </td>
//                         <td>
//                             <p>17th Oct, 15</p>
//                             <p class="text-danger">Overdue</p>
//                         </td>

//                         <td>
//                             <p>$4,670</p>
//                             <p>Paid</p>
//                         </td>
//                         <td class="status">
//                             <span class="status-text status-blue">Early stages</span>
//                         </td>
//                         <td>
//                             <form class="form" action="#" method="POST">
//                                 <select class="action-box">
//                                     <option>Actions</option>
//                                     <option>Start project</option>
//                                     <option>Send for QA</option>
//                                     <option>Send invoice</option>
//                                 </select>
//                             </form>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <p>New Dashboard</p>
//                             <p>Google</p>
//                         </td>
//                         <td>
//                             <p>17th Oct, 15</p>
//                             <p class="text-danger">Overdue</p>
//                         </td>

//                         <td>
//                             <p>$4,670</p>
//                             <p>Paid</p>
//                         </td>
//                         <td class="status">
//                             <span class="status-text status-orange">In progress</span>
//                         </td>
//                         <td>
//                             <form class="form" action="#" method="POST">
//                                 <select class="action-box">
//                                     <option>Actions</option>
//                                     <option>Start project</option>
//                                     <option>Send for QA</option>
//                                     <option>Send invoice</option>
//                                 </select>
//                             </form>
//                         </td>
//                     </tr>
//                 </table>
//             </div>
//         </div>
//         <div class="chart-data">
//             <div class="row">
//                 <div class="col-12 col-md-4">
//                     <div class="chart radar-chart dark">
//                         <div class="actions">
//                             <button type="button" class="btn btn-link"
//                                 data-toggle="dropdown"
//                                 aria-haspopup="true" aria-expanded="false">
//                                 <i class="zmdi zmdi-more-vert"></i>
//                             </button>
//                             <div class="dropdown-menu dropdown-menu-right">
//                                 <button class="dropdown-item" type="button">Action</button>
//                                 <button class="dropdown-item" type="button">Another action</button>
//                                 <button class="dropdown-item" type="button">Something else here</button>
//                             </div>
//                         </div>
//                         <h3 class="title">Household Expenditure</h3>
//                         <p class="tagline">Yearly</p>
//                         <canvas height="400" id="radarChartDark"></canvas>
//                     </div>
//                 </div>
//                 <div class="col-12 col-md-4">
//                     <div class="chart bar-chart light">
//                         <div class="actions">
//                             <button type="button" class="btn btn-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                 <i class="zmdi zmdi-more-vert"></i>
//                             </button>
//                             <div class="dropdown-menu dropdown-menu-right">
//                                 <button class="dropdown-item" type="button">Action</button>
//                                 <button class="dropdown-item" type="button">Another action</button>
//                                 <button class="dropdown-item" type="button">Something else here</button>
//                             </div>
//                         </div>
//                         <h3 class="title">Monthly revenue</h3>
//                         <p class="tagline">2015 (in thousands US$)</p>
//                         <canvas height="400" id="barChartHDark"></canvas>
//                     </div>
//                 </div>
//                 <div class="col-12 col-md-4">
//                     <div class="chart doughnut-chart dark">
//                         <div class="actions">
//                             <button type="button" class="btn btn-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                 <i class="zmdi zmdi-more-vert"></i>
//                             </button>
//                             <div class="dropdown-menu dropdown-menu-right">
//                                 <button class="dropdown-item" type="button">Action</button>
//                                 <button class="dropdown-item" type="button">Another action</button>
//                                 <button class="dropdown-item" type="button">Something else here</button>
//                             </div>
//                         </div>
//                         <h3 class="title">Exports of Goods</h3>
//                         <p class="tagline">2015 (in billion US$)</p>
//                         <canvas height="400" id="doughnutChartDark"></canvas>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </main>
// </div>
// </div>

// @import "https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/dashboard.scss";
// /* $bg: #1b2431;
// $light-text: #738297;
// $dark-text: #273142;
// $light-bg: #313D4F; */


// body {
// 	background-color: "$bg";
// 	color: #202020;
// 	font-family: "Montserrat", "Helvetica", "Open Sans", "Arial";
// 	font-size: 13px;
// }

// a:hover {
// 	text-decoration: none;
// }

// p,
// figure {
// 	margin: 0;
// 	padding: 0;
// }

// @mixin clear() {
// 	&:before,
// 	&:after {
// 		content: " ";
// 		display: table;
// 	}
	
// 	&:after {
// 		clear: both;
// 	}
// }
// thead, tbody, tfoot, tr, td, th {
//   border-color: inherit;
//   border-style: solid;
//   border-width: 0;
//   color: white;
// }



// .card-list {
// 	@include clear();
// 	width: 100%;
// }

// .card {
// 	border-radius: 8px;
// 	color: white;
// 	padding: 10px;
// 	position: relative;

// 	.zmdi {
// 		color: white;
// 		font-size: 28px;
// 		opacity: 0.3;
// 		position: absolute;
// 		right: 13px;
// 		top: 13px;
// 	}
	
// 	.stat {
// 		border-top: 1px solid rgba(255, 255, 255, 0.3);
// 		font-size: 8px;
// 		margin-top: 25px;
// 		padding: 10px 10px 0;
// 		text-transform: uppercase;
// 	}
	
// 	.title {
// 		display: inline-block;
// 		font-size: 8px;
// 		padding: 10px 10px 0;
// 		text-transform: uppercase;
// 	}
	
// 	.value {
// 		font-size: 28px;
// 		padding: 0 10px;
// 	}
	
// 	&.blue {
// 		background-color: #2298F1;
// 	}
	
// 	&.green {
// 		background-color: #66B92E;
// 	}
	
// 	&.orange {
// 		background-color: #DA932C;
// 	}
	
// 	&.red {
// 		background-color: #D65B4A;
// 	}
// }

// .projects {
// 	background-color: "$dark-text";
// 	border: 1px solid "$light-bg";
// 	overflow-x: auto;
// 	width: 100%;
	
// 	&-inner {
// 		border-radius: 4px;
// 	}
// }

// .projects-header {
// 	color: white;
// 	padding: 22px;

// 	.count,
// 	.title {
// 		display: inline-block;
// 	}
	
// 	.count {
// 		color: #738297;
// 	}
	
// 	.zmdi {
// 		cursor: pointer;
// 		float: right;
// 		font-size: 16px;
// 		margin: 5px 0;
// 	}
	
// 	.title {
// 		font-size: 21px;
		
// 		+ .count {
// 			margin-left: 5px;
// 		}
// 	}
// }

// .projects-table {
// 	background: #273142;
// 	width: 100%;
	
// 	/* td
// 	 .th {
		
// 		padding: "10px" "22px";
// 		vertical-align: "middle";
// 	} */
	
// 	/* td p {
// 		font-size: '12px'
		
// 		&:last-of-type {
// 			color: "$light-text";
// 			font-size : "11px";
// 		} */
// 	}
	
// 	th {
// 		background-color: "$light-bg";
// 	}
	
// 	tr {
// 		&:hover {
// 			background-color: lighten("$dark-text", 5%);
// 		}
		
// 		&:not(:last-of-type) {
// 			border-bottom: 1px solid "$light-bg";
// 		}
// 	}
//   p {
//     margin-top: 0;
//     margin-bottom: 1rem;
//     color: white;
// }
	
// 	.member {

// 		.member-info {
// 			display: "inline-block";
// 			vertical-align: top;
// 		}
		
// 		/* figure member-info {
// 			margin-left: "7px";
// 		} */
		
// 		/* img {
// 			border-radius: "50%";
// 			height: "32px";
// 			width: "32px";
// 		} */
// 	}
	
// 	.status > form {
// 		float: right;
// 	}
	
// 	.status-text {
// 		display: inline-block;
// 		font-size: 12px;
// 		margin: 11px 0;
// 		padding-left: 20px;
// 		position: relative;
		
// 		&:before {
// 			border: 3px solid;
// 			border-radius: 50%;
// 			content: "";
// 			height: 14px;
// 			left: 0;
// 			position: absolute;
// 			top: 1px;
// 			width: 14px;
// 		}
		
// 		&.status-blue:before {
// 			border-color: #1C93ED;
// 		}
		
// 		&.status-green:before {
// 			border-color: #66B92E;
// 		}
		
// 		&.status-orange:before {
// 			border-color: #DA932C;
// 		}
		
// 		&.status-red:before {
// 			border-color: #D65B4A;
// 		}
// 	}


// /* .selectric {
// 	background-color: transparent;
// 	border-color: $light-bg;
// 	border-radius: 4px;
// 	.label {
// 		color: $light-text;
// 		line-height: 34px;
// 		margin-right: 10px;
// 		text-align: left;
// 	}
// 	&-wrapper {
// 		float: right;
// 		width: 150px;
// 	}
// } */

// .chart {
// 	border-radius: 3px;

// 	border: 1px solid "$light-bg";
// 	color: white;
// 	padding: 10px;
// 	position: relative;
// 	text-align: center;
	
// 	/* canvas {
// 		height: 400px;
// 		margin: 20px 0;
// 		width: 100%;
// 	} */
	
// 	.actions {
// 		margin: 15px;
// 		position: absolute;
// 		right: 0;
// 		top: 0;

// 		/* span {
// 			cursor: "pointer";
// 			display: inline-block;
// 			font-size: 20px;
// 			margin: 5px;
// 			padding: 4px;
// 		}
// 		 */
// 		.btn-link {
// 			color: white;

// 			/* i {
// 			    font-size: 1.75rem;
// 			} */
// 		}
// 	}
	
// 	.title {
// 		font-size: 18px;
// 		margin: 0;
// 		padding: 15px 0 5px;
// 		+ .tagline {
// 			margin-top: 10px;
// 		}
// 	}
	
// 	.tagline {
// 		font-size: 12px;
// 	}
// }

// .danger-item {
// 	border-left: 4px solid #A84D43;
// }

// .zmdi {
// 	line-height: 1;
// 	vertical-align: middle;
// }




// <div class="app">
// <div class="app-container">
//     {/* <header class="app-header">
//         <div class="app-header-left">
//             <button class="mode-switch" onclick="toggleDarkMode()">
//                 <div class="app-icon"></div>
//             </button>
//             <h1 class="app-name">My App</h1>
//         </div>
//         <div class="app-header-right">
//             <button class="notification-btn">
//                 <img src="notification-icon.svg" alt="Notifications" />
//             </button>
//             <button class="profile-btn">
//                 <img src="profile-picture.jpg" alt="Profile Picture" />
//                 <span>John Doe</span>
//             </button>
//         </div>
//     </header> */}
//     <div class="app-content">
//         {/* <div class="app-sidebar">
//             <a class="app-sidebar-link active" href="#">
//                 <img src="projects-icon.svg" alt="Projects" />
//             </a>
//             <a class="app-sidebar-link" href="#">
//                 <img src="messages-icon.svg" alt="Messages" />
//             </a>
//             <a class="app-sidebar-link" href="#">
//                 <img src="tasks-icon.svg" alt="Tasks" />
//             </a>
//             <a class="app-sidebar-link" href="#">
//                 <img src="files-icon.svg" alt="Files" />
//             </a>
//             <a class="app-sidebar-link" href="#">
//                 <img src="settings-icon.svg" alt="Settings" />
//             </a>
//         </div> */}
//         <div class="page-content">
//             <div class="projects-section">
//                 <div class="projects-section-line">
//                     <div class="projects-section-header">
//                         <p>My Projects</p>
//                         <span class="time">12:00 PM</span>
//                     </div>
//                     <div class="search-wrapper">
//                         <input class="search-input" type="text" placeholder="Search..." />
//                         <button class="add-btn">
//                             {/* <img src="add-icon.svg" alt="Add" /> */}
//                         </button>
//                     </div>
//                 </div>
//                 <div class="projects-status">
//                     <div class="item-status">
//                         <div class="status-number">3</div>
//                         <div class="status-type">To Do</div>
//                     </div>
//                     <div class="item-status">
//                         <div class="status-number">6</div>
//                         <div class="status-type">In Progress</div>
//                     </div>
//                     <div class="item-status">
//                         <div class="status-number">2</div>
//                         <div class="status-type">Completed</div>
//                     </div>
//                 </div>
//                 <div class="view-actions">
//                     <button class="view-btn active" onclick="toggleGridView()">
//                         <img src="grid-view-icon.svg" alt="Grid View" />
//                     </button>
//                     <button class="view-btn" onclick="toggleListView()">
//                         <img src="list-view-icon.svg" alt="List View" />
//                     </button>
//                 </div>
//                 <div class="project-boxes jsGridView">
//                     <div class="project-box-wrapper">
//                         <div class="project-box">
//                             <div class="project-box-header">
//                                 <h2>Project 1</h2>
//                                 <span class="project-box-time">2 hours ago</span>
//                             </div>
//                             <div class="project-box-content">
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                             </div>
//                             <div class="project-box-footer">
//                                 <span class="project-box-status">To Do</span>
//                                 {/* <button class="project-box-btn">
//                                     <img src="options-icon.svg" alt="Options" />
//                                 </button> */}
//                             </div>
//                         </div>
//                     </div>
//                     <div class="project-box-wrapper">
//                         <div class="project-box">
//                             <div class="project-box-header">
//                                 <h2>Project 2</h2>
//                                 <span class="project-box-time">1 day ago</span>
//                             </div>
//                             <div class="project-box-content">
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                             </div>
//                             <div class="project-box-footer">
//                                 <span class="project-box-status">In Progress</span>
//                                 <button class="project-box-btn">
//                                     <img src="options-icon.svg" alt="Options" />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="messages-section">
//                 <div class="messages-section-header">
//                     <p>Messages</p>
//                     <button class="compose-btn">Compose</button>
//                 </div>
//                 <div class="messages-list">
//                     <div class="message-box">
//                         <div class="message-box-header">
//                             <img src="user1-profile-picture.jpg" alt="User 1 Profile Picture" />
//                             <h3>User 1</h3>
//                             <span class="message-time">10:30 AM</span>
//                         </div>
//                         <div class="message-box-content">
//                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                         </div>
//                     </div>
//                     <div class="message-box">
//                         <div class="message-box-header">
//                             <img src="user2-profile-picture.jpg" alt="User 2 Profile Picture" />
//                             <h3>User 2</h3>
//                             <span class="message-time">9:45 AM</span>
//                         </div>
//                         <div class="message-box-content">
//                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// </div>

/* Reset default styles */
// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
  
//   /* Body styles */
//   body {
//     font-family: Arial, sans-serif;
//     background-color: #f2f2f2;
//   }
  
//   /* App container styles */
//   .app {
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 20px;
//   }
  
//   /* App header styles */
//   .app-header {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 10px 0;
//     background-color: #ffffff;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   }
  
//   .app-name {
//     font-size: 18px;
//     font-weight: bold;
//     margin-left: 10px;
//   }
  
//   .app-header-right {
//     display: flex;
//     align-items: center;
//   }
  
//   .notification-btn,
//   .profile-btn {
//     background: none;
//     border: none;
//     cursor: pointer;
//     margin-left: 10px;
//   }
  
//   .notification-btn img,
//   .profile-btn img {
//     width: 24px;
//     height: 24px;
//   }
  
//   .notification-btn:focus,
//   .profile-btn:focus {
//     outline: none;
//   }
  
//   .profile-btn span {
//     font-size: 14px;
//     margin-left: 5px;
//   }
  
//   /* App sidebar styles */
//   .app-sidebar {
//     width: 80px;
//     background-color: #f8f8f8;
//     padding: 20px 0;
//   }
  
//   .app-sidebar-link {
//     display: block;
//     text-align: center;
//     margin-bottom: 20px;
//   }
  
//   .app-sidebar-link img {
//     width: 24px;
//     height: 24px;
//   }
  
//   /* Page content styles */
//   .page-content {
//     display: flex;
//     flex-direction: column;
//     background-color: #ffffff;
//     margin-left: 20px;
//     padding: 20px;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   }
  
//   /* Projects section styles */
//   .projects-section-line {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-bottom: 20px;
//   }
  
//   .projects-section-header {
//     display: flex;
//     align-items: center;
//   }
  
//   .projects-section-header p {
//     font-weight: bold;
//     margin-right: 10px;
//   }
  
//   .time {
//     color: #999999;
//     font-size: 12px;
//   }
  
//   .search-wrapper {
//     display: flex;
//     align-items: center;
//   }
  
//   .search-input {
//     padding: 5px;
//     border: 1px solid #cccccc;
//     border-radius: 4px;
//     margin-right: 10px;
//   }
  
//   .add-btn {
//     background: none;
//     border: none;
//     cursor: pointer;
//   }
  
//   .add-btn img {
//     width: 20px;
//     height: 20px;
//   }
  
//   .add-btn:focus {
//     outline: none;
//   }
  
//   /* Projects status styles */
//   .projects-status {
//     display: flex;
//     margin-bottom: 20px;
//   }
  
//   .item-status {
//     flex: 1;
//     text-align: center;
//   }
  
//   .status-number {
//     font-size: 24px;
//     font-weight: bold;
//   }
  
//   .status-type {
//     font-size: 12px;
//     color: #999999;
//   }
  
//   /* View actions styles */
//   .view-actions {
//     display: flex;
//     justify-content: flex-end;
//     margin-bottom: 20px;
//   }
  
//   .view-btn {
//     background: none;
//     border: none;
//     cursor: pointer;
//   }
  
//   .view-btn img {
//     width: 24px;
//     height: 24px;
//   }
  
//   .view-btn:focus {
//     outline: none;
//   }
  
//   .view-btn.active img {
//     filter: brightness(0.5);
//   }
  
//   /* Project boxes styles */
//   .project-boxes {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//     grid-gap: 20px;
//   }
  
//   .project-box-wrapper {
//     border: 1px solid #cccccc;
//     border-radius: 4px;
//     padding: 10px;
//   }
  
//   .project-box-header {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-bottom: 10px;
//   }
  
//   .project-box-header h2 {
//     font-size: 16px;
//   }
  
//   .project-box-time {
//     color: #999999;
//     font-size: 12px;
//   }
  
//   .project-box-content {
//     margin-bottom: 10px;
//   }
  
//   .project-box-footer {
//     display: flex;
//     align-items: center;
//   }
  
//   .project-box-status {
//     font-size: 12px;
//     font-weight: bold;
//     background-color: #e0e0e0;
//     padding: 5px 10px;
//     border-radius: 4px;
//     margin-right: 10px;
//   }
  
//   .project-box-btn {
//     background: none;
//     border: none;
//     cursor: pointer;
//   }
  
//   .project-box-btn img {
//     width: 16px;
//     height: 16px;
//   }
  
//   .project-box-btn:focus {
//     outline: none;
//   }
  
//   /* Messages section styles */
//   .messages-section-header {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-bottom: 20px;
//   }
  
//   .messages-section-header p {
//     font-weight: bold;
//   }
  
//   .compose-btn {
//     background-color: #4caf50;
//     border: none;
//     color: #ffffff;
//     padding: 5px 10px;
//     border-radius: 4px;
//     cursor: pointer;
//   }
  
//   .compose-btn:focus {
//     outline: none;
//   }
  
//   .messages-list {
//     border: 1px solid #cccccc;
//     border-radius: 4px;
//     padding: 10px;
//   }
  
//   .message-box {
//     margin-bottom: 10px;
//   }
  
//   .message-box-header {
//     display: flex;
//     align-items: center;
//     margin-bottom: 5px;
//   }
  
//   .message-box-header img {
//     width: 30px;
//     height: 30px;
//     border-radius: 50%;
//     margin-right: 10px;
//   }
  
//   .message-box-header h3 {
//     font-size: 16px;
//     margin-right: 10px;
//   }
  
//   .message-time {
//     color: #999999;
//     font-size: 12px;
//   }
  
//   .message-box-content p {
//     margin-bottom: 5px;
//   }
  






















// @import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap");

// * {
//   box-sizing: border-box;
// }

// :root {
//   --app-container: #f3f6fd;
//   --main-color: #1f1c2e;
//   --secondary-color: #4A4A4A;
//   --link-color: #1f1c2e;
//   --link-color-hover: #c3cff4;
//   --link-color-active: #fff;
//   --link-color-active-bg: #1f1c2e;
//   --projects-section: #fff;
//   --message-box-hover: #fafcff;
//   --message-box-border: #e9ebf0;
//   --more-list-bg: #fff;
//   --more-list-bg-hover:  #f6fbff;
//   --more-list-shadow: rgba(209, 209, 209, 0.4);
//   --button-bg: #1f1c24;
//   --search-area-bg: #fff;
//   --star: #1ff1c2e;
//   --message-btn: #fff;
// }

// .dark:root {
//   --app-container: #1f1d2b;
//   --app-container: #111827;
//   --main-color: #fff;
//   --secondary-color: rgba(255,255,255,.8);
//   --projects-section: #1f2937;
//   --link-color: rgba(255,255,255,.8);
//   --link-color-hover: rgba(195, 207, 244, 0.1);
//   --link-color-active-bg: rgba(195, 207, 244, 0.2);
//   --button-bg: #1f2937;
//   --search-area-bg: #1f2937;
//   --message-box-hover: #243244;
//   --message-box-border: rgba(255,255,255,.1);
//   --star: #ffd92c;
//   --light-font: rgba(255,255,255,.8);
//   --more-list-bg: #2f3142;
//   --more-list-bg-hover:  rgba(195, 207, 244, 0.1);
//   --more-list-shadow: rgba(195, 207, 244, 0.1);
//   --message-btn: rgba(195, 207, 244, 0.1);
// }

// html, body {
//   width: 100%;
//   height: 100vh;
//   margin: 0;
// }

// body {
//   font-family: 'DM Sans', sans-serif;
//   overflow: hidden;
//   display: flex;
//   justify-content: center;
//   background-color: var(--app-container);
// }

// button, a {
//   cursor: pointer;
// }

// .app {
//   &-container {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     height: 100%;
//     background-color: var(--app-container);
//     transition: .2s;
//     max-width: 1800px;
    
//     /* button, input, optgroup, select, textarea {
//       font-family: 'DM Sans', sans-serif;
//     } */
//   }
  
//   &-content {
//     display: flex;
//     height: 100%;
//     overflow: hidden;
//     padding: 16px 24px 24px 0;
//   }
  
//   &-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 100%;
//     padding: 16px 24px;
//     position: relative;
    
//     &-left, &-right {
//       display: flex;
//       align-items: center;
//     }
    
//     &-left { flex-grow: 1; } 
    
//     &-right button {
//       margin-left: 10px; 
//     }
//   }
  
//   &-icon {
//     width: 26px;
//     height: 2px;
//     border-radius: 4px;
//     background-color: var(--main-color);
//     position: relative;
    
//     &:before, &:after {
//       content: '';
//       position: absolute;
//       width: 12px;
//       height: 2px;
//       border-radius: 4px;
//       background-color: var(--main-color);
//       left: 50%;
//       transform: translatex(-50%);
//     }
    
//     &:before { top: -6px; }
//     &:after { bottom: -6px; }
//   }
  
//   &-name {
//     color: var(--main-color);
//     margin: 0;
//     font-size: 20px;
//     line-height: 24px;
//     font-weight: 700;
//     margin: 0 32px;
//   }
// }

// .mode-switch {
//   background-color: transparent;
//   border: none;
//   padding: 0;
//   color: var(--main-color);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .search-wrapper {
//   border-radius: 20px;
//   background-color: var(--search-area-bg);
//   padding-right: 12px;
//   height: 40px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   max-width: 480px;
//   color: var(--light-font);
//   box-shadow: 0 2px 6px 0 rgba(136,148,171,.2),0 24px 20px -24px rgba(71,82,107,.1);
//   overflow: hidden;
  
//   .dark & { box-shadow: none; }
// }

// .search-input {
//   border: none;
//   flex: 1;
//   outline: none;
//   height: 100%;
//   padding: 0 20px;
//   font-size: 16px;
//   background-color: var(--search-area-bg);
//   color: var(--main-color);
  
//   &:placeholder {
//     color: var(--main-color);
//     opacity: .6;
//   }
// }

// .add-btn {
//   color: #fff;
//   background-color: var(--button-bg);
//   padding: 0;
//   border: 0;
//   border-radius: 50%;
//   width: 32px;
//   height: 32px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .notification-btn {
//   color: var(--main-color);
//   padding: 0;
//   border: 0;
//   background-color: transparent;
//   height: 32px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .profile-btn {
//   padding: 0;
//   border: 0;
//   background-color: transparent;
//   display: flex;
//   align-items: center;
//   padding-left: 12px;
//   border-left: 2px solid #ddd;
  
//   /* img {
//     width: 32px;
//     height: 32px;
//     object-fit: cover;
//     border-radius: 50%;
//     margin-right: 4px;
//   } */
  
//   /* span {
//     color: var(--main-color);
//     font-size: 16px;
//     line-height: 24px;
//     font-weight: 700;
//   } */
// }

// .page-content {
//   flex: 1;
//   width: 100%;
// }

// .app-sidebar {
//   padding: 40px 16px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
  
//   &-link {
//     color: var(--main-color);
//     color: var(--link-color);
//     margin: 16px 0;
//     transition: .2s;
//     border-radius: 50%;
//     flex-shrink: 0;
//     width: 40px;
//     height: 40px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
    
//     &:hover {
//       background-color: var(--link-color-hover);
//       color: var(--link-color-active);
//     }

//     &.active {
//       background-color: var(--link-color-active-bg);
//       color: var(--link-color-active);
//     }
//   }
// }

// .projects-section {
//   flex: 2;
//   background-color: var(--projects-section);
//   border-radius: 32px;
//   padding: 32px 32px 0 32px;
//   overflow: hidden;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
  
//   &-line {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding-bottom: 32px;
//   }
  
//   &-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 24px;
//     color: var(--main-color);
    
//     /* p {
//       font-size: 24px;
//       line-height: 32px;
//       font-weight: 700;
//       opacity: .9;
//       margin: 0;
//       color: var(--main-color);
//     } */
    
//     .time {
//       font-size: 20px;
//     }
//   }
// }

// .projects-status {
//   display: flex;
// }

// .item-status {
//   display: flex;
//   flex-direction: column;
//   margin-right: 16px;
  
//   &:not(:last-child) .status-type:after {
//     content: '';
//     position: absolute;
//     right: 8px;
//     top: 50%;
//     transform: translatey(-50%);
//     width: 6px;
//     height: 6px;
//     border-radius: 50%;
//     border: 1px solid var(--secondary-color);
//   }
// }

// .status-number {
//   font-size: 24px;
//   line-height: 32px;
//   font-weight: 700;
//   color: var(--main-color);
// }

// .status-type {
//   position: relative;
//   padding-right: 24px;
//   color: var(--secondary-color);
// }

// .view-actions {
//   display: flex;
//   align-items: center;
// }


// .view-btn {
//   width: 36px;
//   height: 36px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 6px;
//   border-radius: 4px;
//   background-color: transparent;
//   border: none;
//   color: var(--main-color);
//   margin-left: 8px;
//   transition: .2s;
  
//   &.active {
//     background-color: var(--link-color-active-bg);
//     color: var(--link-color-active);
//   }
  
//   &:not(.active):hover {
//     background-color:  var(--link-color-hover);
//     color: var(--link-color-active);
//   }
// }


// .messages-section {
//   flex-shrink: 0;
//   padding-bottom: 32px;
//   background-color: var(--projects-section);
//   margin-left: 24px;
//   flex: 1;
//   width: 100%;
//   border-radius: 30px;
//   position: relative;
//   overflow: auto;
//   transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);
  
//   .messages-close {
//     position: absolute;
//     top: 12px;
//     right: 12px;
//     z-index: 3;
//     border: none;
//     background-color: transparent;
//     color: var(--main-color);
//     display: none;
//   }
  
//   &.show {
//     transform: translateX(0);
//     opacity: 1;
//     margin-left: 0;
//   }
  
//   .projects-section-header {
//     position: sticky;
//     top: 0;
//     z-index: 1;
//     padding: 32px 24px 0 24px;
//     background-color:  var(--projects-section);
//   }
// }

// .message-box {
//   border-top: 1px solid var(--message-box-border);
//   padding: 16px;
//   display: flex;
//   align-items: flex-start;
//   width: 100%;
  
//   &:hover {
//     background-color: var(--message-box-hover);
//     border-top-color: var(--link-color-hover);
    
//     + .message-box {
//       border-top-color: var(--link-color-hover);
//     }
//   }
  
//   /* img {
//     border-radius: 50%;
//     object-fit: cover;
//     width: 40px;
//     height: 40px;
//   } */
// }

// .message-header {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
  
//    .name {
//     font-size: 16px;
//     line-height: 24px;
//     font-weight: 700;
//     color: var(--main-color);
//      margin: 0;
//   }
// }

// .message-content {
//   padding-left: 16px;
//   width: 100%;
// }

// .star-checkbox {
//   /* input {
//     opacity: 0;
//     position: absolute;
//     width: 0;
//     height: 0;
//   } */
  
//   /* label {
//     width: 24px;
//     height: 24px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;
//   }
//    */
//   .dark & {
//     color: var(--secondary-color);
    
    
    
//     /* input:checked + label {
//       color: var(--star);
//     } */
//   }
  
//   /* input:checked + label svg {
//     fill: var(--star);
//     transition: .2s;
//   } */
// }

// .message-line {
//   font-size: 14px;
//   line-height: 20px;
//   margin: 8px 0;
//   color: var(--secondary-color);
//   opacity: .7;
  
//   &.time {
//     text-align: right;
//     margin-bottom: 0;
//   }
// }

// .project-boxes {
//   margin: 0 -8px;
//   overflow-y: auto;
  
//   &.jsGridView {
//     display: flex;
//     flex-wrap: wrap;
    
//     .project-box-wrapper {
//       width: 33.3%;
//     }
//   }
  
//   &.jsListView {
//     .project-box {
//       display: flex;
//       border-radius: 10px;
//       position: relative;
//       > * {
//         margin-right: 24px;
//       }
//     }
    
//     .more-wrapper {
//       position: absolute;
//       right: 16px;
//       top: 16px;
//     }
    
//     .project-box-content-header {
//       order: 1;
//       max-width: 120px;
//     }
    
//     .project-box-header {
//       order: 2;
//     }
    
//     .project-box-footer {
//       order: 3;
//       padding-top: 0;
//       flex-direction: column;
//       justify-content: flex-start;
//     }
    
//     .project-box-footer:after {
//       display: none;
//     }
    
//     .participants {
//       margin-bottom: 8px;
//     }
    
//     .project-box-content-header p {
//       text-align: left;
//       overflow: hidden;
//       white-space: nowrap;
//       text-overflow: ellipsis;
//     }
    
//     .project-box-header > span {
//       position: absolute;
//       bottom: 16px;
//       left: 16px;
//       font-size: 12px;
//     }
    
//     .box-progress-wrapper {
//       order: 3;
//       flex: 1;
//     }
//   }
// }

// .project-box {
//   --main-color-card: #dbf6fd;
//   border-radius: 30px;
//   padding: 16px;
//   background-color: var(--main-color-card);
//   margin: 10px;
  
//   &-header {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-bottom: 16px;
//     color: var(--main-color);
    
//     /* span {
//       color: #4A4A4A;
//       opacity: .7;
//       font-size: 14px;
//       line-height: 16px;
//     } */
//   }
  
//   /* &-content-header {
//     text-align: center;
//     margin-bottom: 16px;
    
//     p { margin: 0; }
//   } */
  
//   &-wrapper {
//     padding: 8px;
//     transition: .2s;
//   }
// }

// .project-btn-more {
//   padding: 0;
//   height: 14px;
//   width: 24px;
//   height: 24px;
//   position: relative;
//   background-color: transparent;
//   border: none;
//   flex-shrink: 0;
  
//   /*&:after, &:before {
//     content: '';
//     position: absolute;
//     width: 6px;
//     height: 6px;
//     border-radius: 50%;
//     background-color: var(--main-color);
//     opacity: .8;
//     left: 50%;
//     transform: translatex(-50%);
//   }
  
//   &:before { top: 0;}
//   &:after { bottom: 0; }*/
// }

// .more-wrapper {
//   position: relative;
// }

// .box-content-header {
//   font-size: 16px;
//   line-height: 24px;
//   font-weight: 700;
//   opacity: .7;
// }

// .box-content-subheader {
//   font-size: 14px;
//   line-height: 24px;
//   opacity: .7;
// }

// .box-progress {
//   display: block;
//   height: 4px;
//   border-radius: 6px;
  
//   &-bar {
//     width: 100%;
//     height: 4px;
//     border-radius: 6px;
//     overflow: hidden;
//     background-color: #fff;
//     margin: 8px 0;
//   }
  
//   &-header {
//     font-size: 14px;
//     font-weight: 700;
//     line-height: 16px;
//     margin: 0;
//   }
  
//   &-wrapper {
    
//   }
  
//   &-percentage {
//     text-align: right;
//     margin: 0;
//     font-size: 14px;
//     font-weight: 700;
//     line-height: 16px;
//   }
// }

// .project-box-footer {
//   display: flex;
//   justify-content: space-between;
//   padding-top: 16px;
//   position: relative;
  
//   &:after {
//     content: '';
//     position: absolute;
//     background-color: rgba(255,255,255,0.6);;
//     width: calc(100% + 32px);
//     top: 0;
//     left: -16px;
//     height: 1px;
//   }
// }

// .participants {
//   display: flex;
//   align-items: center;
  
//   /* img {
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     overflow: hidden;
//     object-fit: cover;
    
//     &:not(:first-child) {
//       margin-left: -8px;
//     }
//   } */
// }

// .add-participant {
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   border: none;
//   background-color: rgba(255,255,255,0.6);
//   margin-left: 6px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0;
// }

// .days-left {
//   background-color: rgba(255,255,255,0.6);
//   font-size: 12px;
//   border-radius: 20px;
//   flex-shrink: 0;
//   padding: 6px 16px;
//   font-weight: 700;
// }

// .mode-switch.active .moon {
//   fill: var(--main-color);
// }

// .messages-btn {
//   border-radius: 4px 0 0 4px;
//   position: absolute;
//   right: 0;
//   top: 58px;
//   background-color: var(--message-btn);
//   border: none;
//   color: var(--main-color);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 4px;
//   display: none;
// }

// @media screen and (max-width: 980px) {
//   .project-boxes.jsGridView .project-box-wrapper {
//     width: 50%;
//   }
  
//   .status-number, .status-type {
//     font-size: 14px;
//   }
  
//   .status-type:after {
//     width: 4px;
//     height: 4px;
//   }
  
//   .item-status { margin-right: 0; }
// }

// @media screen and (max-width: 880px) {
//   .messages-section {
//     transform: translateX(100%);
//     position: absolute;
//     opacity: 0;
//     top: 0;
//     z-index: 2;
//     height: 100%;
//     width: 100%;
    
//     .messages-close { display: block; }
//   }
  
//   .messages-btn { display: flex; }
// }

// @media screen and (max-width: 720px) {
//   .app-name, .profile-btn span { display: none; }
  
//   .add-btn, .notification-btn, .mode-switch {
//     width: 20px;
//     height: 20px;
// /*     
//     svg {
//       width: 16px;
//       height: 16px;
//     } */
//   }
  
//   .app-header-right button {
//     margin-left: 4px;
//   }
// }

// @media screen and (max-width: 520px) {
//   .projects-section { overflow: auto; }
//   .project-boxes { overflow-y: visible; }
  
//   .app-sidebar, .app-icon { display: none; }
  
//   .app-content { padding: 16px 12px 24px 12px;}
  
//   .status-number, .status-type {
//     font-size: 10px;
//   }
  
//   .view-btn {
//     width: 24px;
//     height: 24px;
//   }
  
//   .app-header {
//     padding: 16px 10px;
//   }
  
//   .search-input {
//     max-width: 120px;
//   }
  
//   .project-boxes.jsGridView .project-box-wrapper {
//     width: 100%;
//   }
  
//   .projects-section {
//     padding: 24px 16px 0 16px;
//   }
  
//   .profile-btn img {
//     width: 24px;
//     height: 24px;
//   }
  
//   .app-header {
//     padding: 10px;
//   }
  
//   .projects-section-header p,
//   .projects-section-header .time{
//     font-size: 18px;
//   }
  
//   .status-type {
//     padding-right: 4px;
    
//     &:after {
//       display: none;
//     }
//   }
  
//   .search-input {
//     font-size: 14px;
//   }
  
//   .messages-btn { top: 48px; }

//   .box-content-header {
//     font-size: 12px;
//     line-height: 16px;
//   }

//   .box-content-subheader {
//     font-size: 12px;
//     line-height: 16px;
//   }

//   .project-boxes.jsListView .project-box-header > span {
//     font-size: 10px;
//   }

//   .box-progress-header {
//     font-size: 12px;
//   }

//   .box-progress-percentage {
//     font-size: 10px;
//   }

//   .days-left {
//     font-size: 8px;
//     padding: 6px 6px;
//     text-align: center;
//   }

//   .project-boxes.jsListView .project-box > * {
//     margin-right: 10px;
//   }

//   .project-boxes.jsListView .more-wrapper {
//     right: 2px;
//     top: 10px;
//   }
// }