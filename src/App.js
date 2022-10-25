import React, { Component } from "react";

class App extends Component {
	render() {
		return (
			// Class ga ada, adanya class name
			<div className="p-5">
				<container>
					<div class="container">
						<div class="row">
							<div class="col-md-6">
								<div class="card">
									<div class="card-header">Learn React JS</div>
									<div class="card-body">
										<form action="">
											<div class="mb-4">
												<label htmlfor="firstname" className="form-label">
													Firstname
												</label>
												<input type="text" name="firstname" id="firstname" class="form-control" />
											</div>
											<div class="mb-4">
												<label htmlfor="lastname" className="form-label">
													LastName
												</label>
												<input type="text" name="lastname" id="lastname" class="form-control" />
											</div>
											<button type="submit" class="btn btn-primary btn-block">
												Show
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</container>
			</div>
		);
	}
}

export default App;
