/**
 * Created at 16/5/18.
 * @Author Ling.
 * @Email i@zeroling.com
 */

export default ({types: t}) => ({
  visitor: {
    Identifier(path, state) {
      const replacement = state.opts[path.node.name]
      if (path.parent.type === 'MemberExpression') {
        return;
      }
      if (replacement !== undefined) {
        const type = typeof replacement
        if (type === 'boolean') {
          path.replaceWith(t.booleanLiteral(replacement))
        } else { // treat as string
          const str = String(replacement)
          path.replaceWith(t.stringLiteral(str))
        }
      }
    }
  }
});
