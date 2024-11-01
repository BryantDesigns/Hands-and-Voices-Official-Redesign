import { useState, useEffect } from "react";
import MembershipModal from "../components/MembershipModal";
import { StartPageLoadTop } from "../utilities/tools";
const MembershipPage = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		success: false,
		successMessage: "",
	});

	const [showModal, setShowModal] = useState(false);

	const [form, setForm] = useState({
		parentName: "",
		secondaryParentName: "",
		phone: "",
		email: "",
		address: "",
		city: "",
		zip: "",
		schoolDist: "",
		children: "",
		membershipType: "",
		membershipDonation: "",
	});

	useEffect(() => {
		StartPageLoadTop();
	}, []);

	return (
		<div>
			<div className='w-full bg-hvorange py-8 leading-8 animate-fadeIn'>
				<h1 className='text-4xl text-center font-kaushan text-white p-4 '>Help Us Help You!</h1>
				<p className='w-4/6 mx-auto text-white'>
					We are a non-profit organization dedicated to supporting families of children who are deaf or hard of hearing with information and resources
					so they can make the best choices for their child.{" "}
					<p>
						Your contribution helps us to continue developing and disseminating resources designed to give families unbiased information for their
						children who are deaf or hard-of-hearing. We are grateful for your support.{" "}
						<span className='text-hvblue text-2xl font-kaushan underline'>Thank you!</span>
					</p>
					<p>Download our Membership Form or fill out the form below to pay online. Scholarships are available for parents upon request.</p>
				</p>
			</div>
			<section className='w-full h-full  text-white '>
				<form name='membership' netlify action='choose-your-membership.html' method='post' className='w-3/4 mx-auto bg-hvblue p-8 space-y-8'>
					<div className='flex flex-row justify-around w-full mx-auto mb-4'>
						<div className='flex flex-col w-full px-4 group'>
							<label for='inputName' className='group-focus:text-hvorange'>
								Parent/Guardian Name:
							</label>
							<input
								name='name'
								type='text'
								className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
								id='inputName'
							/>
						</div>

						<div className='flex flex-col w-full px-4'>
							<label htmlFor='inputName'>Secondary Parent/Guardian Name:</label>
							<input
								name='name'
								type='text'
								className='htmlForm-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
								id='inputName'
							/>
						</div>
					</div>
					<div className='w-full'>
						<div className='flex flex-col w-full px-4'>
							<label htmlFor='inputTel'>Phone Number</label>
							<input
								name='phone'
								type='tel'
								className='htmlForm-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
								id='inputTel'
							/>
						</div>
					</div>

					<div className='w-full'>
						<div className='flex flex-col w-full px-4'>
							<label htmlFor='inputEmail'>Email:</label>
							<input
								name='email'
								type='email'
								className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
								id='inputEmail'
								aria-describedby='emailHelp'
							/>
							<small id='emailHelp' className='form-text text-muted'>
								We'll never share your email with anyone else.
							</small>
						</div>
					</div>

					<div className='flex flex-row w-full px-4 indent-2 '>
						<div className='flex flex-col w-full pr-2'>
							<label htmlFor='inputAddress'>Home Address:</label>
							<input
								name='address'
								type='text'
								className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
								id='inputAddress'
								placeholder='1234 Main St'
							/>
						</div>
						<div className='flex flex-col w-full px-2'>
							<label htmlFor='inputCity'>City:</label>
							<input
								name='city'
								type='text'
								className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
								id='inputCity'
							/>
						</div>
						<div className='flex flex-col w-full pl-2 '>
							<label htmlFor='inputZip'>Zip:</label>
							<input
								name='zip'
								type='text'
								className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
								id='inputZip'
							/>
						</div>
					</div>
					<div className='flex flex-col w-full px-4 indent-2 '>
						<label htmlFor='inputSchoolDist'>School Dist./BOCES:</label>
						<input
							name='school-dist'
							type='text'
							className='form-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
							id='inputSchoolDist'
							placeholder='School District'
						/>
					</div>
					<div className='flex flex-col w-full px-4 indent-2'>
						<label htmlFor='inputTextArea'>Children (deaf/hh &amp; siblings, ages):</label>
						<textarea
							name='textarea'
							className='htmlForm-control rounded-lg text-black focus:ring-offset-hvorange focus:ring-offset-1 focus:ring-2 focus:ring-hvorange focus:ring-inset focus:shadow-md focus:shadow-hvorange '
							rows='3'
							id='inputTextArea'
						></textarea>
					</div>
					<div className='flex flex-col w-full px-4 caret-hvorange'>
						<p className='text-lg font-bold underline'>Choose Your Membership:</p>
						<div className='form-check flex flex-col w-full ml-4 space-y-4 mt-4'>
							<div className='inline-flex w-full justify-start items-center space-x-2 '>
								<input name='checkbox-one-parent' className='form-check-input focus:text-hvorange' type='checkbox' id='parentCheck' />
								<label className='form-check-label' htmlFor='parentCheck'>
									Parent, Student, DHH Adult
								</label>
							</div>
							<div className='inline-flex w-full justify-start items-center space-x-2 '>
								<input name='checkbox-two-professional' className='form-check-input focus:text-hvorange' type='checkbox' id='professionalCheck' />
								<label className='form-check-label' htmlFor='professionalCheck'>
									Professional
								</label>
							</div>
							<div className='inline-flex w-full justify-start items-center space-x-2 '>
								<input name='checkbox-three-org' className='form-check-input focus:text-hvorange' type='checkbox' id='organizationCheck' />
								<label className='form-check-label' htmlFor='organizationCheck'>
									Organization
								</label>
							</div>
							<div className='inline-flex w-full justify-start items-center space-x-2 '>
								<input name='checkbox-four-other' className='form-check-input focus:text-hvorange' type='checkbox' id='otherCheck' />
								<label className='form-check-label' htmlFor='otherCheck'>
									Other
								</label>
							</div>
						</div>
						<div className='mt-4'>
							<p className='text-lg font-bold underline'>Annual membership donation enclosed:</p>
							<div className='form-check flex flex-col w-full ml-4 space-y-4 mt-4'>
								<div className='inline-flex w-full justify-start items-center space-x-2 '>
									<input name='membership-25' className='form-check-input focus:text-hvorange' type='checkbox' id='twentyFiveCheck' />
									<label className='form-check-label' htmlFor='twentyFiveCheck'>
										$25 Parent/DHH adult/Student
									</label>
								</div>

								<div className='inline-flex w-full justify-start items-center space-x-2 '>
									<input name='membership-40' className='form-check-input focus:text-hvorange' type='checkbox' id='fortyCheck' />
									<label className='form-check-label' htmlFor='fortyCheck'>
										$40 Professional
									</label>
								</div>

								<div className='inline-flex w-full justify-start items-center space-x-2 '>
									<input name='membership-50' className='form-check-input focus:text-hvorange' type='checkbox' id='fiftyCheck' />
									<label className='form-check-label' htmlFor='fiftyCheck'>
										$50 Organization
									</label>
								</div>

								<div className='inline-flex w-full justify-start items-center space-x-2 '>
									<input name='membership-donate' className='form-check-input focus:text-hvorange' type='checkbox' id='addDonateCheck' />
									<label className='form-check-label' htmlFor='addDonateCheck'>
										Additional Donation to Chapter to Help Cover Scholarships/Fee Waivers and Chapter Expenses (on next page)
									</label>
								</div>

								<div className='inline-flex w-full justify-start items-center space-x-2 '>
									<input
										name='membership-0'
										className='form-check-input active:bg-hvorange focus:caret-hvorange focus:text-hvorange'
										type='checkbox'
										id='zeroCheck'
									/>
									<label className='form-check-label' htmlFor='zeroCheck'>
										$0 Request Scholarship/Fee waiver
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className='flex justify-evenly'>
						<button
							type='submit'
							className='bg-hvorange text-white h-fit w-fit px-4 py-2 rounded-lg hover:shadow-2xl hover:shadow-hvorange hover:bg-hvblue ease-in-out duration-300 '
							formAction='choose-your-membership.html'
						>
							Submit
						</button>{" "}
						<button
							onClick={() => setShowModal(true)}
							className='bg-hvorange text-white h-fit w-fit px-4 py-2 rounded-lg hover:shadow-2xl hover:shadow-hvorange hover:bg-hvblue ease-in-out duration-300'
						>
							Make Membership Payment
						</button>
					</div>
				</form>
			</section>{" "}
			<MembershipModal show={showModal} closeModal={() => setShowModal(false)} />
		</div>
	);
};

export default MembershipPage;
