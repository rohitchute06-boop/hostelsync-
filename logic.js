// // app.js

// // Mock Data
// const pendingPasses = [
//     { id: 101, name: "Aryan Sharma", reason: "Weekend Home Visit", parentPhone: "+919876543210" },
//     { id: 102, name: "Isha Gupta", reason: "Local Outing", parentPhone: "+919876543211" }
// ];

// // 1. Digital Gate Pass Approval Workflow
// function renderPasses() {
//     const table = document.getElementById('pass-table');
//     table.innerHTML = pendingPasses.map(pass => `
//         <tr style="border-bottom: 1px solid #f1f5f9;">
//             <td style="padding: 12px;">${pass.name}</td>
//             <td>${pass.reason}</td>
//             <td><span class="status-pill pending">Pending Warden</span></td>
//             <td>
//                 <button class="btn-approve" onclick="approvePass(${pass.id}, '${pass.parentPhone}')">Approve & Notify</button>
//             </td>
//         </tr>
//     `).join('');
// }

// // 2. Parent SMS & Notification Simulation
// function approvePass(id, phone) {
//     // In a real app, this calls an SMS API like Twilio
//     alert(`Gate Pass #${id} Approved!\nSMS Sent to Parent (${phone}): "Your ward's outpass has been authorized."`);
    
//     // Update UI
//     const index = pendingPasses.findIndex(p => p.id === id);
//     pendingPasses.splice(index, 1);
//     renderPasses();
//     document.getElementById('pass-count').innerText = `${pendingPasses.length} Pending`;
// }

// // 3. Complaint Escalation with SLA Tracking
// const complaints = [
//     { id: 1, type: "Plumbing", hoursOpen: 26, slaLimit: 24 }
// ];

// function checkSLA() {
//     complaints.forEach(c => {
//         if (c.hoursOpen > c.slaLimit) {
//             console.log(`ALARM: Complaint #${c.id} escalated to Chief Warden!`);
//         }
//     });
// }

// // Initialize
// renderPasses();