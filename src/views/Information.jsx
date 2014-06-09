/** @jsx React.DOM */

/**
   Copyright 2014 Swedish Connection
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
   limitations under the License.
*/

var React   = require('react');

module.exports = React.createClass({

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Notifications</h2>
            <p></p>
          </div>
          <div className="col-md-4">
            <h2>Easy</h2>
            <p></p>
          </div>
          <div className="col-md-4">
            <h2>Safe</h2>
            <p></p>
          </div>
        </div>

        <footer>
			    <p>&copy; Swedish Connection 2014</p>
		    </footer>
      </div>
    )
  }
});
