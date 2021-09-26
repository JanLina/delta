import AttributeMap from './AttributeMap';

interface Op {
  // only one property out of {insert, delete, retain} will be present
  insert?: string | Record<string, unknown>;
  delete?: number;
  retain?: number;

  attributes?: AttributeMap;
}

namespace Op {
  // 返回值：某 op 的长度
  // delete：删除了几个字符
  // retain：跳过了几个字符
  // insert：插入了几个字符
  export function length(op: Op): number {
    if (typeof op.delete === 'number') {
      return op.delete;
    } else if (typeof op.retain === 'number') {
      return op.retain;
    } else {
      return typeof op.insert === 'string' ? op.insert.length : 1;
    }
  }
}

export default Op;
