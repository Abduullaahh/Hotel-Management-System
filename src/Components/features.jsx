import React from 'react'

export default function Features() {
  return (
    <div class="features">
		<hr className="line" />
			<div class="row">
				<div class="each">
					<div class="pic"><img src="icon_1.svg" class="svg" alt="Resort" width="150" height="150"/></div>
					<div class="title"><h2>Fabulous Resort</h2></div>
					<div class="text">
						<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a bibendum.</p>
					</div>
				</div>
				<div class="each">
					<div class="pic"><img src="icon_2.svg" class="svg" alt="Pool" width="150" height="150"/></div>
					<div class="title"><h2>Infinity Pool</h2></div>
					<div class="text">
						<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a bibendum.</p>
					</div>
				</div>
				<div class="each">
					<div class="pic"><img src="icon_3.svg" class="svg" alt="Rooms" width="150" height="150"/></div>
					<div class="title"><h2>Luxury Rooms</h2></div>
					<div class="text">
						<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a bibendum.</p>
					</div>
				</div>
			</div>
		<hr className="line" />
	</div>
  );
}
