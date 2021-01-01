/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'

function TabItem({ children, hidden, className }) {
    return (
        <div
            role="tabpanel"
            {...{
                hidden,
                className
            }}
        >
            {!hidden ? children : null}
        </div>
    )
}

export default TabItem
